// ** Toolkit imports
import { configureStore } from "@reduxjs/toolkit";
import calendar from "@web/store/apps/calendar";
// ** Reducers
import chat from "@web/store/apps/chat";
import email from "@web/store/apps/email";
import invoice from "@web/store/apps/invoice";
import permissions from "@web/store/apps/permissions";
import user from "@web/store/apps/user";

export const store = configureStore({
  reducer: {
    user,
    chat,
    email,
    invoice,
    calendar,
    permissions,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
