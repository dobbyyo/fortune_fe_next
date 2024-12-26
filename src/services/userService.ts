import axiosInstance from "@/lib/axios";

export const getUsers = async () => {
  const response = await axiosInstance.get("/users");
  return response.data;
};

export const createUser = async (user: { name: string }) => {
  const response = await axiosInstance.post("/users", user);
  return response.data;
};
