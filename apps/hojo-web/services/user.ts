import { handleAPIError } from '@web/utils/handle-api-error';

import { request } from './axios';

export const getGuestDailyBible = async (): Promise<IBibleSentence> => {
  try {
    const { data: bibleSentence } = await request<IBibleSentence, IGuest>(
      '/guest/daily-bible',
      {
        method: 'GET',
      }
    );

    if (bibleSentence) {
      return bibleSentence;
    }

    return null;
  } catch (err) {
    throw handleAPIError(err);
  }
};
