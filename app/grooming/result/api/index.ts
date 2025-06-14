import api from "@/lib/axios";
const BASE_PATH = "/api/grooming/tests/histories";

const userGroomingResultDetail = async (date: string) => {
  const response = await api.get(`${BASE_PATH}/detail?date=${date}`);

  return response.data;
};

export { userGroomingResultDetail };
