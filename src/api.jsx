import axios from "axios";

const API_KEY = "T6GqUpDlxX2Zh2jV8hGHhT9GMoBYXNd_gRSB5OIp1s4";
axios.defaults.baseURL = "https://api.unsplash.com/";
axios.defaults.headers.common["Authorization"] = API_KEY;
axios.defaults.params = {
  orientation: "landscape",
  per_page: 15,
};

const getImages = async (query, page) => {
  const { data } = await axios.get(`search?query=${query}&page=${page}`);
  return data;
};
export default getImages;
