import axios from "axios";
import {CookieKeys,CookieStorage} from "./cookies"
export const http = axios.create({
  // baseURL: import.meta.env.VITE_BASE_URL,
  baseURL: "http://localhost:2000/api/",
  timeout: 30000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// http.interceptors.request.use((config) => {
//   config.headers = {
//     ...config.headers,
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3R0ZXN0Iiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzIxMzE0NTkyfQ.YRck114DzbshPyRXmc9oafRtSvKoC018PDBIb74mqpQ',
//   };
//   return config;
// });

http.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    Authorization: `Bearer ${
      CookieStorage.get(CookieKeys.AuthToken)
        ? CookieStorage.get(CookieKeys.AuthToken)
        : ""
    }`,
  };
  return config;
});


export default http;