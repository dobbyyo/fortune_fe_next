import { useQuery } from "@tanstack/react-query";
import { getPostById } from "@/services/postService";

// 특정 게시글 쿼리
export const usePost = (id: string) => {
  return useQuery({
    queryKey: ["post", id],
    queryFn: () => getPostById(id),
    enabled: !!id,
  });
};
