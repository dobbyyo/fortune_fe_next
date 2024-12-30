import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { checkAuth } from "@/services/authService";
import TarotPageContent from "@app/(pages)/tarot/TarotPageContent";
import { ApiResponse } from "@/types/api";

export const Tarot = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery<ApiResponse<null>>({
    queryKey: ["auth"],
    queryFn: checkAuth,
  });

  const dehydratedState = dehydrate(queryClient);
  const authData = queryClient.getQueryData<ApiResponse<null>>(["auth"]) || {
    status: 401,
    message: "Unauthorized",
    data: null,
  };

  return (
    <HydrationBoundary state={dehydratedState}>
      <TarotPageContent authData={authData} />
    </HydrationBoundary>
  );
};

export default Tarot;
