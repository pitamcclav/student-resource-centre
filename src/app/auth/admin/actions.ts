'use server';

import { z } from 'zod';
import { cookies } from 'next/headers';
import { authenticateAdmin } from '@/lib/auth';

// Validation schema
const adminLoginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters")
});

export async function loginAdmin(formData: FormData) {
  // Parse and validate form data
  console.log('validating')
  const validatedFields = adminLoginSchema.safeParse({
    email: formData.get('email') as string,
    password: formData.get('password') as string
  });

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors
    };
  }
  console.log('done validation')

  try {
    // Authenticate admin using the provided email and password
    const admin = await authenticateAdmin(
      validatedFields.data.email,
      validatedFields.data.password
    );

    // Set authentication cookie
    (await
      // Set authentication cookie
      cookies()).set('session', admin.token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 * 7 // 1 week
    });

    return { success: true };
  } catch (error) {
    return {
      error: {
        general: error.message || "Invalid email or password"
      }
    };
  }
}
