import {
  requestErrorInterceptor,
  requestInterceptor,
} from "@/middleware/requestInterceptor";
import {
  responseErrorInterceptor,
  responseInterceptor,
} from "@/middleware/responseInterceptor";
import axios from "axios";

// Axios 인스턴스 생성
const axiosInstance = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_API_URL || "https://jsonplaceholder.typicode.com",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// 요청 및 응답 인터셉터 추가
axiosInstance.interceptors.request.use(
  requestInterceptor,
  requestErrorInterceptor
);
axiosInstance.interceptors.response.use(
  responseInterceptor,
  responseErrorInterceptor
);

export default axiosInstance;
