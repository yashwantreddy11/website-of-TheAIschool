import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { getAdminSessionSecret } from '@/lib/auth';

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    // Verify admin credentials
    if (email === 'admin@theaischool.com' && password === 'admin123') {
      const secretToken = getAdminSessionSecret();
      const cookieStore = await cookies();
      cookieStore.set('admin_session', secretToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60 * 60 * 24, // 1 day
        path: '/',
      });
      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ success: false, error: 'Invalid credentials' }, { status: 401 });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
