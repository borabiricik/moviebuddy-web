import axios from "axios";

export const defaultApi = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "548c28ba44b8951cf31389023ae063b0",
  },
});

export const detailsApi = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "548c28ba44b8951cf31389023ae063b0",
    append_to_response: "watch/providers,videos"
  },
});

export const imageApi = axios.create({
  baseURL: "https://image.tmdb.org/t/p/original",
});
