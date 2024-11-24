import axiosInstance from './axios-instance';
import {AxiosError} from "axios";

export interface ApiResponse<T> {
  data: T;
  status: number;
  message?: string;
}

export type DefaultErrorData = { message?: string; code?: string };
export type ResponseError<ErrorData = DefaultErrorData> = Error | AxiosError<ErrorData>;

const DataProvider = {
  get: async <T>(url: string): Promise<ApiResponse<T>> => {
    const response = await axiosInstance.get<T>(url);
    return { data: response.data, status: response.status };
  },

  post: async <T, U>(url: string, payload: U): Promise<ApiResponse<T>> => {
    const response = await axiosInstance.post<T>(url, payload);
    return { data: response.data, status: response.status };
  },

  put: async <T, U>(url: string, payload: U): Promise<ApiResponse<T>> => {
    const response = await axiosInstance.put<T>(url, payload);
    return { data: response.data, status: response.status };
  },

  delete: async <T>(url: string): Promise<ApiResponse<T>> => {
    const response = await axiosInstance.delete<T>(url);
    return { data: response.data, status: response.status };
  },
};

export default DataProvider;