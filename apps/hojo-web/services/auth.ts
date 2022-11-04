import { handleAPIError } from '@web/utils/handle-api-error';
import mutateStorage from '@web/utils/mutate-storage';

import { STATUS } from '@web/config';

import { request } from './axios';

export const loginGuest = async (): Promise<IGuest> => {
  try {
    const { data: user } = await request<IGuest, GetTokenArgs>(
      '/guest/app/login',
      {
        method: 'POST',
      }
    );

    if (user && user.token) {
      mutateStorage.persist({
        status: STATUS.SUCCESS,
        loginTimeStamp: Date.now(),
        accessToken: user.token,
      });
    }

    return user;
  } catch (err) {
    throw handleAPIError(err);
  }
};
