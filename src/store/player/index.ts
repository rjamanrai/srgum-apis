import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";

const { LIVE_URL } = process.env;

const url: string = LIVE_URL || "";

// Define a type for the slice state
interface CounterState {
  url: playerUrl;
  info?: any;
}

type playerUrl = string;

// Define the initial state using that type
const initialState: CounterState = {
  url,
  info: null,
};

export const player = createSlice({
  name: "player",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setPlayerUrl: (state, action: PayloadAction<string>) => {
      state.url += action.payload;
    },
    setPlayerInfo: (state, action: PayloadAction<any>) => {
      state.info = action.payload;
    },
  },
});

export const { setPlayerUrl, setPlayerInfo } = player.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectPlayerUrl = (state: RootState) => state.player.url;
export const selectPlayerInfo = (state: RootState) => state.player.info;

export default player.reducer;
