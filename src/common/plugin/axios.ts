import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { config } from "../config";

const axiosConfig: AxiosRequestConfig = {
  baseURL: config.baseURL || "",
  timeout: 5 * 1000
};

const http: AxiosInstance = axios.create(axiosConfig);

http.interceptors.request.use(originConfig => {
  const requestConfig = { ...originConfig };

  // 请求路径容错处理
  if (!requestConfig.url) {
    throw new Error("request need url");
  }

  // 默认请求方式为 GET
  if (!requestConfig.method) {
    requestConfig.method = "GET";
  }

  return requestConfig;
});

export { http };
