import { handleAPIError } from "@web/utils/handle-api-error";

import { request } from "./axios";

export const getRounds = async (): Promise<IRound> => {
  try {
    const { data: rounds } = await request<IRound, any>("/game/rounds", {
      method: "GET",
    });

    if (rounds) {
      return rounds;
    }

    return null;
  } catch (err) {
    throw handleAPIError(err);
  }
};
