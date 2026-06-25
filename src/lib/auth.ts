import { cookies } from 'next/headers';

export function getAdminSessionSecret(): string {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret) {
    throw new Error('CRITICAL SECURITY ERROR: ADMIN_SESSION_SECRET environment variable is missing.');
  }
  return secret;
}

export async function getAdminSession() {
  try {
    const secretToken = getAdminSessionSecret();
    const cookieStore = await cookies();
    const sessionToken = cookieStore.get('admin_session')?.value;
    if (sessionToken === secretToken) {
      return { email: 'admin@theaischool.com', role: 'admin' };
    }
    return null;
  } catch (error) {
    console.error('[AuthError] Session validation failed:', error);
    return null;
  }
}
