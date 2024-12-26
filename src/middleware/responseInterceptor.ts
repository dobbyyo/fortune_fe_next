import { AxiosError, AxiosResponse } from "axios";

export const responseInterceptor = (response: AxiosResponse) => {
  return response;
};

export const responseErrorInterceptor = (error: AxiosError) => {
  if (error.response?.status === 401) {
    console.error("Unauthorized: Redirecting to login...");
    // 로그아웃 처리 로직 또는 리다이렉트 추가
  }
  return Promise.reject(error);
};
