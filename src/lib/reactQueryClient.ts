import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2, // 실패 시 2번 재시도
      refetchOnWindowFocus: false, // 창이 포커스를 얻을 때 재요청 비활성화
      staleTime: 1000 * 60 * 5, // 5분 동안 데이터 신선 유지
    },
  },
});

export default queryClient;
