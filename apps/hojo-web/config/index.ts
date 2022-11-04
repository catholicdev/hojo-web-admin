export const PUBLIC_API = process.env.NEXT_PUBLIC_API || '';

export enum STORAGE_KEYS {
  ACCESS_TOKEN = '_@hojo/client:access-token',
  REMEMBER_ME = '_@hojo/client:remember-me',
  USER_DATA = '_@hojo/client:data',
}

export enum STATUS {
  SUCCESS = 'success',
  ERROR = 'error',
  WARNING = 'warning',
  INFO = 'info',
}

export enum ACTION_STATUS {
  PENDING = 'pending',
}
