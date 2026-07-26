import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const data = Object.fromEntries(formData.entries());
    
    // In a real app, save this to a database (e.g. MongoDB, PostgreSQL)
    console.log("Memory received:", data);

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    return NextResponse.json({ success: true, message: "Ký ức của bạn đã được lưu giữ thành công!" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, message: "Đã có lỗi xảy ra, vui lòng thử lại sau." }, { status: 500 });
  }
}
