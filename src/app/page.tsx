import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { checkAuth } from "@/services/authService";
import HomePageContent from "./pages/(home)/HomePageContent";
import { ApiResponse } from "@/types/api";

export const HomePage = async () => {
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
      <HomePageContent authData={authData} />
    </HydrationBoundary>
  );
};

export default HomePage;
