import { configureStore } from "@reduxjs/toolkit";
import APIWeather from "./slices/apiSlice";
import city from "./slices/citySlice";

const myStore = configureStore({
  reducer: {
    apiResponse: APIWeather,
    showCity: city,
  },
});
export default myStore;
