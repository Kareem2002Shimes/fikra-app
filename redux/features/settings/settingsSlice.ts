import { createSlice } from "@reduxjs/toolkit";

type SelectType = {
  value: string;
  label: string;
  ref?: string;
  image?: string;
};

export type InitialStateType = {
  selectedSpace: null | SelectType;
  selectedTypeOfRoom: null | SelectType;
  selectedChooseStyle: null | SelectType;
  selectedMode: null | SelectType;
  selectedStyle: null | SelectType;
  selectedQuality: null | SelectType;
  selectedResolution: null | SelectType;
  uploadedImage: null;
  receivedImage: null;
  activeIdea: null;
};
const initialState: InitialStateType = {
  selectedSpace: null,
  selectedTypeOfRoom: null,
  selectedMode: null,
  selectedStyle: null,
  selectedQuality: null,
  selectedChooseStyle: null,
  selectedResolution: null,
  uploadedImage: null,
  receivedImage: null,
  activeIdea: null,
};
const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setSelectedSpace: (state, action) => {
      state.selectedSpace = action.payload;
    },
    setSelectedTypeOfRoom: (state, action) => {
      state.selectedTypeOfRoom = action.payload;
    },
    setSelectedMode: (state, action) => {
      state.selectedMode = action.payload;
    },
    setSelectedQuality: (state, action) => {
      state.selectedQuality = action.payload;
    },
    setSelectedStyle: (state, action) => {
      state.selectedStyle = action.payload;
    },
    setSelectedResolution: (state, action) => {
      state.selectedResolution = action.payload;
    },
    setUploadedImage: (state, action) => {
      state.uploadedImage = action.payload;
    },
    setSelectedChooseStyle: (state, action) => {
      state.selectedChooseStyle = action.payload;
    },
    setReceivedImage: (state, action) => {
      state.receivedImage = action.payload;
    },
    setActiveIdea: (state, action) => {
      state.activeIdea = action.payload;
    },
  },
});

export const {
  setSelectedSpace,
  setSelectedTypeOfRoom,
  setSelectedMode,
  setSelectedQuality,
  setSelectedStyle,
  setSelectedResolution,
  setUploadedImage,
  setSelectedChooseStyle,
  setReceivedImage,
  setActiveIdea,
} = settingsSlice.actions;

export default settingsSlice.reducer;
