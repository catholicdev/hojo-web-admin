import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import axios from 'axios';

import mutateStorage from '@web/utils/mutate-storage';

import { PUBLIC_API } from '@web/config';

axios.interceptors.request.use((req) => {
  if (typeof window != 'undefined') {
    if (mutateStorage.accessToken) {
      req.headers.Authorization = `Bearer ${mutateStorage.accessToken}`;
    }
  }

  return req;
});

export const request = <T, D>(
  endpoint,
  options?: AxiosRequestConfig<D> & { headers? }
): Promise<AxiosResponse<T>> => {
  return axios({
    method: options?.method || 'GET',
    baseURL: PUBLIC_API,
    url: endpoint,
    ...options,
    headers: {
      ...options?.headers,
    },
  });
};
