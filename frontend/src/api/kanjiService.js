import { getRequest } from "./requests";
import apikeys from "./apikey.json";

const headers = {
  "x-rapidapi-host": apikeys["x-rapidapi-host"],
  "x-rapidapi-key": apikeys["x-rapidapi-key"],
};

export const getKanjiByGrade = async (grade) => {
  const url = `https://kanjialive-api.p.rapidapi.com/api/public/search/advanced/?grade=${grade}`;
  const response = await getRequest(url, { headers });
  return response;
};

export const getKanjiDetails = async (kanji) => {
  const url = `https://kanjialive-api.p.rapidapi.com/api/public/kanji/${kanji}`;
  const response = await getRequest(url, { headers });
  return response;
};
