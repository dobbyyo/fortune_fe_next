import { ApiResponse } from "../api";

// 예제: 사용자 API 응답 타입
export type UserResponse = ApiResponse<{
  id: number;
  name: string;
  email: string;
}>;
