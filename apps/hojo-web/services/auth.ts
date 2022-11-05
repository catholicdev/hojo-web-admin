import { handleAPIError } from '@web/utils/handle-api-error';
import mutateStorage from '@web/utils/mutate-storage';

import { STATUS } from '@web/config';

import { request } from './axios';

export const loginGuest = async (): Promise<IGuest> => {
  try {
    const { data: user } = await request<IGuest, GetGuestTokenArgs>(
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

      mutateStorage.persistGuest({
        userId: user.userId,
        appId: user.appId,
      });
    }

    return user;
  } catch (err) {
    throw handleAPIError(err);
  }
};

export const reloginGuest = async ({
  userId,
  appId,
}: GetGuestTokenArgs): Promise<IGuestToken> => {
  try {
    const { data } = await request<IGuestToken, GetGuestTokenArgs>(
      '/guest/app/relogin',
      {
        method: 'POST',
        data: { userId, appId },
      }
    );

    if (data) {
      mutateStorage.persist({
        status: STATUS.SUCCESS,
        loginTimeStamp: Date.now(),
        accessToken: data.token,
      });
    }

    return data;
  } catch (err) {
    throw handleAPIError(err);
  }
};
