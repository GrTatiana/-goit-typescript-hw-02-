import axios from "axios";

const API_KEY = "T6GqUpDlxX2Zh2jV8hGHhT9GMoBYXNd_gRSB5OIp1s4";
axios.defaults.baseURL = "https://api.unsplash.com/";
axios.defaults.headers.common["Authorization"] = API_KEY;
axios.defaults.params = {
  orientation: "landscape",
  per_page: 15,
};

const getPhotos = async (query, page) => {
  const { data } = await axios.get(
    `search/photos?client_id=${API_KEY}&query=${query}&page=${page}`
  );
  return data;
};

export default getPhotos;
