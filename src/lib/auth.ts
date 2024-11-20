// src/lib/auth.ts
import { jwtVerify, SignJWT } from 'jose'
import { cookies } from 'next/headers'
import { AppDataSource, initialize } from '@/lib/db'
import bcrypt from 'bcrypt'

import { Admin } from '@/entity/Admin'
import { Student } from '@/entity/Student'

const secret = new TextEncoder().encode(process.env.JWT_SECRET)

export async function encrypt(payload: any) {
    return await new SignJWT(payload)
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('1h')
        .sign(secret)
}

export async function decrypt(token: string): Promise<any> {
    try {
        const { payload } = await jwtVerify(token, secret)
        return payload
    } catch (err) {
        return null
    }
}

export async function login(data: any) {
    const token = await encrypt(data)
    ;(await cookies()).set('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60 * 60 // 1 hour
    })
}

export async function logout() {
    (await cookies()).delete('token')
}

export async function getSession() {
    const token = (await cookies()).get('token')?.value
    if (!token) return null
    return await decrypt(token)
}

export async function authenticateUser(studentNo: string, password: string) {
    const student = await AppDataSource.getRepository(Student).findOne({ where: { studentNo } });
    if (!student) {
      throw new Error('User not found');
    }
  
    const isPasswordValid = await bcrypt.compare(password, student.password);
    if (!isPasswordValid) {
      throw new Error('Invalid credentials');
    }
  
    const token = await encrypt({ id: student.id, studentNo: student.studentNo });
    return { token, student };
  }

  export async function authenticateAdmin(email: string, password: string) {
    console.log('authenticating admin')
    await initialize();
    const admin = await AppDataSource.getRepository(Admin).findOne({ where: { email } });
    if (!admin) {
      throw new Error('User not found');
    }
    console.log(admin.password)
    console.log(password)
  
    const isPasswordValid = await bcrypt.compare(password, admin.password);
    if (!isPasswordValid) {
      throw new Error('Invalid credentials');
    }
  
    const token = await encrypt({ id: admin.id, email: admin.email });
    return { token, admin };
  }

