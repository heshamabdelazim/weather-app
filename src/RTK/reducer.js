import { configureStore } from "@reduxjs/toolkit";
import APIWeather from "./slices/apiSlice";
import city from "./slices/citySlice";
import location from "./slices/userLocation";

const myStore = configureStore({
  reducer: {
    apiReducer: APIWeather,
    showCity: city,
    userLocation: location,
  },
});
export default myStore;
