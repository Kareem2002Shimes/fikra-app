import { RootState } from "@/redux/app/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface InitialStateType {
  accessToken: string | null;
}
const initialState: InitialStateType = {
  accessToken: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (
      state: InitialStateType,
      action: PayloadAction<InitialStateType>
    ) => {
      const { accessToken } = action.payload;
      state.accessToken = accessToken;
    },
    logOut: (state: InitialStateType) => {
      state.accessToken = null;
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentToken = (state: RootState) => state.auth.accessToken;
