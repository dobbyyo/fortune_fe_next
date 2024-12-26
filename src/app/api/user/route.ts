import { handleApiError, serializeData } from "@/app/utils";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const users = [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
    ];
    return NextResponse.json(serializeData(users));
  } catch (error) {
    return handleApiError(error); // 에러 처리
  }
};
export const POST = async (req: Request) => {
  try {
    const body = await req.json();
    return NextResponse.json({ message: "User created", user: body });
  } catch (error) {
    return handleApiError(error);
  }
};
