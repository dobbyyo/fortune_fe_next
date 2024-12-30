import axiosInstance from "@/lib/axios";
import { ApiResponse } from "@/types/api";

export const checkAuth = async (): Promise<ApiResponse<null>> => {
  try {
    const { data } = await axiosInstance.get("/auth/check");
    // console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
};
