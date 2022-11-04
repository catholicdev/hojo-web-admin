import type { AxiosError } from "axios";
import axios from "axios";

export const handleAPIError = (error: Error | AxiosError): ApiError => {
  if (error && axios.isAxiosError(error)) {
    const { response } = error;

    let { message } = response.data;

    if (!message && Array.isArray(response.data.errors)) {
      message = response.data.errors.map((e) => e.message).join(" ");
    }

    const err: ApiError = new Error(message || "Unauthorized");

    err.meta = { code: response?.status || 400, token: response?.data?.token };

    return err;
  }

  return error;
};
