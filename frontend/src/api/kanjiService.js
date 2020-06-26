import { getRequest } from "./requests";
import apikeys from "./apikey.json";

export const getKanjiByGrade = async (grade) => {
  const url = `https://kanjialive-api.p.rapidapi.com/api/public/search/advanced/?grade=${grade}`;
  const headers = {
    "x-rapidapi-host": apikeys["x-rapidapi-host"],
    "x-rapidapi-key": apikeys["x-rapidapi-key"],
  };
  const response = await getRequest(url, { headers });
  console.log(response);
  return response;
};
