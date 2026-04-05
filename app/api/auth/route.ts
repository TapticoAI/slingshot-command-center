import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const { password } = await request.json();
  const correctPassword = process.env.GUIDE_PASSWORD || 'slingshot2026';
  
  if (password === correctPassword) {
    return NextResponse.json({ success: true });
  }
  
  return NextResponse.json({ success: false, message: 'Invalid password' }, { status: 401 });
}
