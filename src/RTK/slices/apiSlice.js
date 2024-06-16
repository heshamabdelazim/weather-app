import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// const APIWeather = (city, lat, lon, exclude, language) => {
//   return `https://api.openweathermap.org/data/2.5/weather?${
//     city ? "q=" + city : "lat=" + lat + "&lon=" + lon
//   }${exclude && "&exclude=" + exclude}${
//     language && "&lang=" + language
//   }&appid=59baed44bcb9c644463cb7d5986e0ab7&units=metric$`;
// };
// // the api above has return , So the state of this slice will be a (modified API)
// // documentation of API here https://openweathermap.org/current
// // when you call this function, If city is empty then you must put (lat and lon)
// //exclude param are maybe:  (current, minutely, hourly, daily, alerts)
// // language like (ar, en, .......)

const apiStructure = createSlice({
  initialState: "",
  name: "apiStructure",
  reducers: {
    APIStructure: (state, action) => {
      return action.payload;
    },
  },
});

export const { APIStructure } = apiStructure.actions;
export default apiStructure.reducer;
