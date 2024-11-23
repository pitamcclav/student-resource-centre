

'use server';

import { z } from 'zod';


import { PrismaClient } from '@prisma/client';
import { saveStudent } from '@/lib/auth';
import { cookies } from 'next/headers';

const prisma = new PrismaClient();

export async function getPrograms() {
  try {

    const programs = await prisma.program.findMany();
    console.log('programs:', programs);

    // await initialize();
    // const programRepository = AppDataSource.getRepository(Program);
    // const programs = await programRepository.find();
    
    // Return plain objects
    return programs.map(program => ({
      id: program.id,
      name: program.name,
      code: program.code,
      duration: program.duration,
    }));
  } catch (error) {
    console.error("Error fetching programs:", error);
    throw new Error("Failed to fetch programs");
  }
}

// Registration validation schema
const registrationSchema = z.object({
  studentNo: z.string().length(10, "Student number must be exactly 10 characters"),
  email: z.string().email(),
  password: z.string().min(6),
  confirmPassword: z.string(),
  programId: z.number()
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"]
});

export async function registerUser(formData: FormData) {
  console.log('validating')
  formData.forEach((value, key) => {
    console.log(`${key}: ${value}`);
  });
  const validatedFields = registrationSchema.safeParse({
    studentNo: formData.get('studentNo') as string,
    email: formData.get('email') as string,
    password: formData.get('password') as string,
    programId: parseInt(formData.get('programId') as string),
    confirmPassword: formData.get('confirmPassword') as string
  });

  console.log('validated fields:', validatedFields);

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors
    };
  }

  const { studentNo, email, password, programId } = validatedFields.data;

  try{
    const newStudent = await saveStudent(studentNo, email, password, programId);
    

    (await cookies()).set('session', newStudent.token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 7 // 1 week
    });

    return { success: true };

  } catch (error) {
    return { error: { general: error.message || "An error occurred" } };
  }
}
