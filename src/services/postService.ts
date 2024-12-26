import axiosInstance from "@/lib/axios";
import { UserResponse } from "@/types/users/userTypes";

export const getPostById = async (id: string) => {
  const response = await axiosInstance.get<UserResponse>(`/api/posts/${id}`);
  return response.data;
};
