

'use server';

import { z } from 'zod';
import bcrypt from 'bcrypt';
import { AppDataSource } from '@/lib/db'; // Assume you have a database connection
import { initialize } from '@/lib/db';
import { Program } from '@/entity/Program';
import { Student } from '@/entity/Student';


export async function getPrograms() {
  try {
    await initialize();
    const programRepository = AppDataSource.getRepository(Program);
    const programs = await programRepository.find();
    
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

// Validate registration data
export async function registerUser(formData: FormData) {
  await initialize();
  // Validate form data
  console.log('validating')
  console.log('form data entries:', Array.from(formData.entries()));
  const validatedFields = registrationSchema
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords do not match",
      path: ["confirmPassword"]
    })
    .safeParse({
      studentNo: formData.get('studentNo') as string,
      email: formData.get('email') as string,
      password: formData.get('password') as string,
      programId: parseInt(formData.get('programId') as string),
      confirmPassword: formData.get('confirmPassword') as string
    });

    console.log('validated fields:', validatedFields);

  // Check validation
  if (!validatedFields.success) {
    return { 
      errorType: "validation",
      errors: validatedFields.error.flatten().fieldErrors, 
      console: validatedFields.error.flatten().fieldErrors  
    };
  }

  const { studentNo, email, password, programId } = validatedFields.data;

  try {
    // Check if user already exists
    const existingUser = await AppDataSource.getRepository(Student)
      .createQueryBuilder('student')
      .where('student.studentNo = :studentNo OR student.email = :email', {
        studentNo,
        email
      })
      .getOne();

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
    const program = await AppDataSource.getRepository(Program).findOne({
      where: { id: programId },
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
    const newUser = new Student();
    newUser.studentNo = studentNo;
    newUser.email = email;
    newUser.password = hashedPassword;
    newUser.program = Promise.resolve(program);

    const studentRepository = AppDataSource.getRepository(Student);
    await studentRepository.save(newUser);

    console.log('new user saved:', newUser);

    // Optionally send verification email
    // await sendVerificationEmail(email);

    return { success: true };
  } catch (error) {
    console.error('Registration error:', error);
    return { 
      errors: { 
        general: "Registration failed. Please try again." 
      } 
    };
  }
}