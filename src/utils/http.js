import axios from "axios";
import { CookieKeys, CookieStorage } from "./cookies"
export const http = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 30000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
http.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    Authorization: `Bearer ${CookieStorage.get(CookieKeys.AuthToken)
        ? CookieStorage.get(CookieKeys.AuthToken)
        : ""
      }`,
  };
  return config;
});


export default http;