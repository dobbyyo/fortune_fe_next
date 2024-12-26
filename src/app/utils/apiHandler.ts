import { NextResponse } from "next/server";

/**
 * API 에러를 처리하여 구조화된 JSON 응답을 반환하는 함수
 * @param error - 처리할 에러 객체
 * @returns Next.js JSON 응답 객체
 */
export const handleApiError = (error: unknown) => {
  console.error("API Error:", error);

  return NextResponse.json(
    { message: "An unexpected error occurred", error: String(error) },
    { status: 500 }
  );
};

export default handleApiError;
