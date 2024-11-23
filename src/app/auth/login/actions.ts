
'use server';

import { z } from 'zod';
import { cookies } from 'next/headers';
import { authenticateUser } from '@/lib/auth';

// Validation schema
const loginSchema = z.object({
  studentNo: z.string().max(10, "Student number must be at most 10 characters"),
  password: z.string().min(6, "Password must be at least 6 characters")
});


export async function loginUser(formData: FormData) {
  console.log('loginUser');
  const validatedFields = loginSchema.safeParse({
    studentNo: formData.get('studentNo') as string,
    password: formData.get('password') as string
  });

  console.log('validatedFields', validatedFields);
  

  if (!validatedFields.success) {
    return { 
      error: validatedFields.error.flatten().fieldErrors 
    };
  }

  try {
    const user = await authenticateUser(
      validatedFields.data.studentNo, 
      validatedFields.data.password
    );
  
    (await cookies()).set('session', user.token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 7 // 1 week
    });
  
    return { success: true };
  } catch (error) {
    return { error: { general: error.message || "An error occurred" } };
  }
  
}