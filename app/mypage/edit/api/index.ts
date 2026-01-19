import { authApi } from "@/lib/axios";
import { UserInfoResponse, UserInfoUpdateRequest } from "../types";

const BASE_PATH = "/api/users";

export const getUserInfo = async () => {
  const response = await authApi.get<UserInfoResponse>(
    `${BASE_PATH}/info/simple`
  );
  return response.data.data;
};

export const userInfoUpdate = async (data: UserInfoUpdateRequest) => {
  const response = await authApi.put(`${BASE_PATH}/info`, data);
  return response.data;
};
