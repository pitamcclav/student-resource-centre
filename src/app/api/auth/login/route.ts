// app/api/login/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const { studentNo, password } = await request.json();

  try {
    // Authentication logic
    const user = await authenticateUser(studentNo, password);

    // Set cookie or return token
    return NextResponse.json(
      { success: true, user }, 
      { 
        status: 200,
        headers: {
          'Set-Cookie': `session=${user.token}; HttpOnly; Path=/; Max-Age=604800`
        }
      }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Authentication failed' }, 
      { status: 401 }
    );
  }
}