import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const APIWeather = (city, lat, lon, exclude, language) => {
  const APIBuilder = `https://api.openweathermap.org/data/2.5/weather?${
    city ? "q=" + city : "lat=" + lat + "&lon=" + lon
  }${exclude && "&exclude=" + exclude}${
    language && "&lang=" + language
  }&appid=59baed44bcb9c644463cb7d5986e0ab7&units=metric$`;
  //
  // const res = await fetch(APIBuilder);
  // const data = await res.json();
  // console.log(data);
  return APIBuilder;
};
// the api above has return , So the state of this slice will be a (modified API)
// documentation of API here https://openweathermap.org/current
// when you call this function, If city is empty then you must put (lat and lon)
//exclude param are maybe:  (current, minutely, hourly, daily, alerts)
// language like (ar, en, .......)

const apiStructure = createSlice({
  initialState: "",
  name: "apiStructure",
  reducers: {
    APIStructure: (state, action) => {
      console.log(state, "state inside API structure");
      return APIWeather(...action.payload); //the return of this action will be weather Object to use
    },
  },
});

export const { APIStructure } = apiStructure.actions;
export default apiStructure.reducer;
