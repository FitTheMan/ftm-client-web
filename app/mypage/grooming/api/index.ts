import api from "@/lib/axios";
const BASE_PATH = "/api/grooming/tests";

const userGroomingCheckList = async () => {
  const response = await api.get(`${BASE_PATH}/histories`);
  return response.data;
};

export { userGroomingCheckList };

//타입 지정해야함
