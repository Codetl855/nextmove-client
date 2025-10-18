import axios, { AxiosInstance, AxiosRequestConfig, Method } from "axios";
import { resetCsrf } from "@/lib/csrf";
import { HTTP_STATUS } from "@/constants/httpStatus";
import { APP_ROUTES } from "@/constants/appRoutes";
let loaderCount = 0;
let showLoader: (() => void) | null = null;
let hideLoader: (() => void) | null = null;

// For non-component files, we use a hack to set loader handlers from context
export function setLoaderHandlers(show: () => void, hide: () => void) {
  showLoader = show;
  hideLoader = hide;
}

const api: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true,
  withXSRFToken: true,
  headers: {
    Accept: "application/json",
  },
});


const request = async <T = any>(
  method: Method,
  url: string,
  data?: any,
  config?: AxiosRequestConfig
): Promise<any> => {
  if (showLoader) {
    if (loaderCount === 0) showLoader();
    loaderCount++;
  }

  try {
    const finalConfig: AxiosRequestConfig = { ...config };

    if (data instanceof FormData) {
      if (finalConfig.headers) {
        const { ["Content-Type"]: _, ...rest } = finalConfig.headers;
        finalConfig.headers = rest;
      }
      delete api.defaults.headers.common["Content-Type"];
    } else {
      finalConfig.headers = {
        ...(finalConfig.headers || {}),
        "Content-Type": "application/json",
      };
    }

    const result = await api.request<T>({
      method,
      url,
      data,
      ...finalConfig,
    });

    return result;
  } catch (err: any) {
    if (err.response?.status === HTTP_STATUS.CSRF_EXPIRED) {
      resetCsrf();
      window.location.href = APP_ROUTES.AUTH.SIGNIN;
    }
    throw err;
  } finally {
    if (hideLoader) {
      loaderCount = Math.max(0, loaderCount - 1);
      if (loaderCount === 0) hideLoader();
    }
  }
};

export { api, request };