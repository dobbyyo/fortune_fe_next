import { NextResponse } from "next/server";
import { parseUrl } from "@/app/utils/parseUrl";

export const GET = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  try {
    const url = req.url;

    // URL을 파싱하여 특정 정보 추출
    const parsedUrl = parseUrl(url);
    const userId = params.id;

    return NextResponse.json({
      message: `Fetching user with ID: ${userId}`,
      url: parsedUrl.pathname,
    });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to process URL", error: String(error) },
      { status: 400 }
    );
  }
};
