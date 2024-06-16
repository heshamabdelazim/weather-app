// This file include structure of the body of API
// the api above has return , So the state of this slice will be a (modified API)
// documentation of API here https://openweathermap.org/current
// when you call this function, If city is empty then you must put (lat and lon)
//exclude param are maybe:  (current, minutely, hourly, daily, alerts)
// language like (ar, en, .......)

export const APIWeather = (city, lat, lon, exclude, language) => {
  return `https://api.openweathermap.org/data/2.5/weather?${
    city ? "q=" + city : "lat=" + lat + "&lon=" + lon
  }${exclude && "&exclude=" + exclude}${
    language && "&lang=" + language
  }&appid=59baed44bcb9c644463cb7d5986e0ab7&units=metric$`;
};
