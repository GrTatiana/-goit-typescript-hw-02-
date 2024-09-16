import axios from "axios";
import { Image } from "./App.types";

const API_KEY = "T6GqUpDlxX2Zh2jV8hGHhT9GMoBYXNd_gRSB5OIp1s4";
axios.defaults.baseURL = "https://api.unsplash.com/";
axios.defaults.headers.common["Authorization"] = API_KEY;
axios.defaults.params = {
  orientation: "landscape",
  per_page: 15,
};

interface GetPhotos {
  results: Image[];
  total: number;
  total_pages: number;
}

const getPhotos = async (query: string, page: number): Promise<GetPhotos> => {
  const { data } = await axios.get<GetPhotos>(
    `search/photos?client_id=${API_KEY}&query=${query}&page=${page}`
  );
  return data;
};

export default getPhotos;
