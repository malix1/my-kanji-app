import { postRequest } from "./requests";

export const createUser = async (user) => {
  const url = "http://127.0.0.1:8000/api/account/register";
  user = { ...user, username: user.email };
  const response = await postRequest(url, user, { headers: {} });
  return response;
};

export const loginUser = async (user) => {
  const url = "http://127.0.0.1:8000/api/account/login";
  const response = await postRequest(url, user, { headers: {} });
  return response
};
