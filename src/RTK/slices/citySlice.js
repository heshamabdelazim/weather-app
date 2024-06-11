import { createSlice } from "@reduxjs/toolkit";

const city = createSlice({
  initialState: false,
  name: "city",
  reducers: {
    cityToggle: (state, action) => {
      return state + action.payload;
    },
  },
});

export default city.reducer;
export const { cityToggle } = city.actions;
