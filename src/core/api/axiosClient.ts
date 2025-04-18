import axios from "axios";
import queryString from "query-string";
import { API_KEY, BASE_URL, TOKEN } from "./config";

export const axiosClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    // eslint-disable-next-line prettier/prettier
    Accept: "application/json",
    "content-type": "application/json",
    "api-key": API_KEY,
    Authorization: `Bearer ${TOKEN}`,
  },
  paramsSerializer: (params: any) => queryString.stringify(params),
});
axiosClient.interceptors.request.use((request) => {
  return request;
});
axiosClient.interceptors.response.use(
  (response) => {
    if (response.config.responseType === "document") {
      return response.data;
    }
    return response;
  },
  (error) => {
    throw error;
  }
);
