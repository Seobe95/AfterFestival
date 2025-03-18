import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const text = await request.json(); // ✅ JSON이 깨졌는지 확인하기 위해 `text()`로 먼저 받아보기
    console.log("Raw Body:", text);
    return NextResponse.json({ success: true });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    console.log(err);
    return NextResponse.json({ error: "이게 에러다" }, { status: 400 });
  }
}
