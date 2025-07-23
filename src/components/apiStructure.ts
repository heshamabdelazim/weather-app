// the api above has return , So the state of this slice will be a (modified API)
// documentation of API here https://openweathermap.org/current

const API_KEY = "59baed44bcb9c644463cb7d5986e0ab7&units=metric$";

// const BASE_URL= "https://api.openweathermap.org/data/2.5/weather"
const BASE_URL = "https://pro.openweathermap.org/data/2.5/weather";

export const generateAPI_byCity: generateAPI_byCity = (
  city,
  exclude,
  language
) => {
  return `${BASE_URL}?q=${city}&exclude=${exclude}&lang=${language}&appid=${API_KEY}`;
};

export const generateAPI_byLatLong: generateAPI_byLatLong = (
  lat,
  long,
  exclude = "current",
  language = "en"
) => {
  return `${BASE_URL}?lat=${lat}&lon=${long}&exclude=${exclude}&lang=${language}&appid=${API_KEY}`;
};

interface generateAPI_byLatLong {
  (
    lat?: String,
    log?: String,
    exclude?: "current" | "minutely" | "hourly" | "daily" | "alerts",
    language?: String | "en" | "ar" // language like (ar, en, .......)
  ): String;
}

interface generateAPI_byCity {
  (
    city: String,
    exclude?: "current" | "minutely" | "hourly" | "daily" | "alerts",
    language?: String | "en" | "ar"
  ): String;
}
