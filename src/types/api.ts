// 공통 API 응답 타입
export type ApiResponse<T> = {
  data: T;
  status: number;
  message?: string;
};
