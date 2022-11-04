type ApiError = Error & {
  message: string;
  meta?: { code?: number; token?: string };
};
