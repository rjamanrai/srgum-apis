import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { useDispatch } from "react-redux";
import playerReducer from "./player";
import { liveInfo } from "./player/api";

export const store = configureStore({
  reducer: {
    [liveInfo.reducerPath]: liveInfo.reducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(liveInfo.middleware),
});

setupListeners(store.dispatch)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
