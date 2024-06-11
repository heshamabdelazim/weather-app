import { createSlice } from "@reduxjs/toolkit";

// This to save the (API) of the user locatoin after allowing

const userLocation = createSlice({
  initialState: "",
  name: "userLocation",
  reducers: {
    saveLocation: (state, action) => {
      return action.payload;
    },
  },
});

export default userLocation.reducer;
export const { saveLocation } = userLocation.actions;
