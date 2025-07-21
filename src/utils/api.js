import axios from "axios";
import Qs from "qs";
import { REST_API } from "./constants";
axios.defaults.withCredentials = true;

function getCookie(cname) {
  const name = `${cname}=`;
  const ca = document.cookie.split(";");

  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1);
    if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
  }

  return "";
}

const api = axios.create({
  baseURL: REST_API,
  withCredentials: true,
  paramsSerializer: (params) => {
    return Qs.stringify(params, { arrayFormat: "brackets" });
  },
  validateStatus: (status) => {
    console.log("API Status Verbose: ", status);
    if (status > 205) {
      toast(status);
      console.error("API error: ", status);
    }
    if (status > 499) {
      toast(status);
      console.error("Server Error: ", status);
    }
    return status >= 200 && status < 423;
  },
  onUploadProgress: (progressEvent) => {},
  onDownloadProgress: (progressEvent) => {},
});

/*
api.interceptors.request.use((config) => {
  const accessToken = getToken()

  if (accessToken) {
    config.headers.authorization = `Bearer ${accessToken}` // eslint-disable-line
  }

  return config
}) */

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Add a response interceptor
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    // If the error status is 401 and there is no originalRequest._retry flag,
    // it means the token has expired and we need to refresh it
    if (error.response.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = localStorage.getItem("refreshToken");
        const response = await axios.post(
          `${REST_API}/v1/auth/refresh-tokens`,
          {
            refreshToken,
          }
        );
        localStorage.setItem("token", response.tokens?.access.token);
        localStorage.setItem("refreshToken", response.tokens?.refresh.token);

        // Retry the original request with the new token
        originalRequest.headers.Authorization = `Bearer ${token}`;
        return axios(originalRequest);
      } catch (error) {
        // Handle refresh token error or redirect to login
      }
    }

    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    if (response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    if (error.response && error.response.data) {
      console.error(error);
      toast("API Error");
      // return Promise.reject(error.response.data.error)
    }
  }
);

export default api;
