// src/lib/auth.ts
import { jwtVerify, SignJWT } from 'jose'
import { cookies } from 'next/headers'
import bcrypt from 'bcrypt'
import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient();
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

export async function saveStudent(studentNo : string, email : string, password : string, programId : number) {

  try {
    // Check if user already exists
    const existingUser = await prisma.student.findFirst({
      where: {
        OR: [
          { studentNo: studentNo },
          { email: email }
        ]
      }
    });

      console.log('trying to get user')

    if (existingUser) {
      return { 
        errors: { 
          general: existingUser.studentNo === studentNo 
            ? "Student number is already registered" 
            : "Email is already in use" 
        },
        console: existingUser.studentNo === studentNo
      };
    }

    // Check if program exists
    const program = await prisma.program.findFirst({
      where: {
        id: programId
      }
    });
    if (!program) {
      return {
        errorType: "validation",
        errors: { programId: "Invalid program selected" },
        console: "Invalid program selected"
      };
    }

    console.log('found program:', program);

   console.log(programId);
   console.log(studentNo);
    console.log(email);

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    console.log('hashed');
    // Create user in database
    const newUser = await prisma.student.create({
      data: {
        studentNo: studentNo,
        email: email,
        password: hashedPassword,
        program: {
          connect: {
            id: programId
          }
        }
      }
    });

    console.log('new student saved:', newUser);

    const token = await encrypt({ id: newUser.id, studentNo: newUser.studentNo });

    // Optionally send verification email
    // await sendVerificationEmail(email);

    return { success: true, token };
  } catch (error) {
    console.error('Registration error:', error);
    return { 
      errors: { 
        general: "Registration failed. Please try again." 
      } 
    };
  }
}

export async function authenticateUser(studentNo: string, password: string) {

  const student = await prisma.student.findFirst({
    where: {
      studentNo: studentNo,
    }
  });

  if (!student) {
    throw new Error('User not found');
  }

  const isPasswordValid = await bcrypt.compare(password, student.password);
  if (!isPasswordValid) {
    throw new Error('Invalid credentials');
  }

  const token = await encrypt({ id: student.id, studentNo: student.studentNo });
  return { token, student };
    // await initialize()
    // const student = await AppDataSource.getRepository(Student).findOne({ where: { studentNo } })
    // if (!student) {
    //     throw new Error('User not found')
    // }
    // const isPasswordValid = await bcrypt.compare(password, student.password)
    // if (!isPasswordValid) {
    //     throw new Error('Invalid credentials')
    // }
    // const token = await encrypt({ id: student.id, studentNo: student.studentNo })
    // return { token, student }
}

  export async function authenticateAdmin(email: string, password: string) {
    console.log('authenticating admin')
    const admin = await prisma.admin.findFirst({
      where: {
        email: email,
      }
    });

    if (!admin) {
      throw new Error('User not found');
    }

    const isPasswordValid = await bcrypt.compare(password, admin.password);
    if (!isPasswordValid) {
      throw new Error('Invalid credentials');
    }

    const token = await encrypt({ id: admin.id, email: admin.email });
    return { token, admin };
    // await initialize();
    // const admin = await AppDataSource.getRepository(Admin).findOne({ where: { email } });
    // if (!admin) {
    //   throw new Error('User not found');
    // }
    // console.log(admin.password)
    // console.log(password)
  
    // const isPasswordValid = await bcrypt.compare(password, admin.password);
    // if (!isPasswordValid) {
    //   throw new Error('Invalid credentials');
    // }
  
    // const token = await encrypt({ id: admin.id, email: admin.email });
    // return { token, admin };
  }

