import { createSlice } from "@reduxjs/toolkit";

const site = createSlice({
  name: "site",
  initialState: {
    token: "",
    message: "",
    loading: true,
  },
  reducers: {
    setTokenData: (state, action) => {
      state.token = action.payload;
    },
    setMessageData: (state, action) => {
      state.message = action.payload;
    },
    setLoadingData: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export default site;
