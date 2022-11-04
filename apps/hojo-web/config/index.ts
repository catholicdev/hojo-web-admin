export const PUBLIC_API = process.env.NEXT_PUBLIC_API || "";

export enum STORAGE_KEYS {
  ACCESS_TOKEN = "_@lite/client:access-token",
  REMEMBER_ME = "_@lite/client:remember-me",
  USER_DATA = "_@lite/client:data",
}

export enum STATUS {
  SUCCESS = "success",
  ERROR = "error",
  WARNING = "warning",
  INFO = "info",
}

export enum ACTION_STATUS {
  PENDING = "pending",
}
