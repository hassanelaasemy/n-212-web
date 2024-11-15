import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./ThemeSlice";
import authSlice from "./authSlice";
import UserSlice from "./UserSlice";
export const store = configureStore({
  reducer: {
    theme: themeSlice,
    auth: authSlice,
    user: UserSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
