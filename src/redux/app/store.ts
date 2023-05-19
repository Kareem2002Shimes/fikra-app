import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { apiSlice } from "./api/apiSlice";
import authReducer from "../features/auth/authSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import settingsReducer from "../features/settings/settingsSlice";
import pricingReducer from "../features/pricing/pricingSlice";
export const store = configureStore({
  reducer: {
    settings: settingsReducer,
    pricing: pricingReducer,
  },
  devTools: process.env.NODE_ENV === "development",
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({}).concat(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

setupListeners(store.dispatch);
