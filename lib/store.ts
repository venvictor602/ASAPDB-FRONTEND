import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { blogApi } from "./api/blog-api";
import { careersApi } from "./api/careers-api";
import { contactApi } from "./api/contact-api";
import { servicesApi } from "./api/services-api";

// Example slice - replace with your actual slices
interface ExampleState {
  value: number;
}

const initialState: ExampleState = {
  value: 0,
};

const exampleSlice = createSlice({
  name: "example",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

export const { increment, decrement, reset } = exampleSlice.actions;

export const store = configureStore({
  reducer: {
    example: exampleSlice.reducer,
    [blogApi.reducerPath]: blogApi.reducer,
    [careersApi.reducerPath]: careersApi.reducer,
    [contactApi.reducerPath]: contactApi.reducer,
    [servicesApi.reducerPath]: servicesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      blogApi.middleware,
      careersApi.middleware,
      contactApi.middleware,
      servicesApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Typed hooks
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
