import { postRequest } from "./requests";

export const loginUser = () => {};

export const createUser = async (user) => {
  const url = "http://127.0.0.1:8000/api/account/register";
  user = { ...user, username: user.email };
  const response = await postRequest(url, user, { headers: {} });
  return response;
};
