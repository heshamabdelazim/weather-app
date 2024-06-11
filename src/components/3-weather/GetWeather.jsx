import React, { useEffect, useRef, useState } from "react";
// css
import "./GetWeather.css";

// redux
import { useDispatch, useSelector } from "react-redux";
import { Button, Container } from "react-bootstrap";
import { APIStructure } from "../../RTK/slices/apiSlice";

// videos
import clear from "../../videos/clear-sky.mp4";
import rain from "../../videos/sleet.mp4";
import sand from "../../videos/sand.mp4";
import snow from "../../videos/snow.mp4";
import drizzle from "../../videos/drizzle.mp4";
import fog from "../../videos/fog.mp4";
import thunderstorm from "../../videos/thunderstorm.mp4";
import tornado from "../../videos/tornado.mp4";
import dust from "../../videos/dust.mp4";
import clouds from "../../videos/clouds.mp4";

const GetWeather = () => {
  // ========== hoocks
  let [weatherObject, setWeatherObject] = useState();
  let startFetch = useRef(true);
  let userInput = useRef();
  let inputDOM = useRef();

  // ========== Redux hocks
  let dispatch = useDispatch();
  let dataBase = useSelector((state) => state);

  // ========== useEffect
  useEffect(() => {
    if (startFetch.current) {
      fetching();
    }
  });

  // ========== function
  const fetching = async () => {
    let res = await fetch(dataBase.apiReducer);
    let data = await res.json();
    console.log(dataBase.apiReducer, "inside fetching before set render");
    console.log(data, "inside fetching before set render");
    setWeatherObject(data);
    startFetch.current = false;
  };
  console.log(weatherObject);
  // ========== function
  const allVideos = [
    { video: clear, name: "clear" },
    { video: rain, name: "rain" },
    { video: sand, name: "sand" },
    { video: snow, name: "snow" },
    { video: drizzle, name: "drizzle" },
    { video: fog, name: "fog" },
    { video: thunderstorm, name: "thunderstorm" },
    { video: tornado, name: "tornado" },
    { video: dust, name: "dust" },
    { video: clouds, name: "clouds" },
  ];
  const settingVideo = () => {
    return (
      weatherObject &&
      allVideos.filter((videoObj) => {
        return videoObj.name == weatherObject.weather[0].main.toLowerCase();
      })
    );
  };
  return (
    <div className="weather-section section ">
      <Container>
        <h2 className=" header ">
          Getting Data <span className="icon-cloud-sun-lightning fw-bold" />
        </h2>
        <div>
          <input
            ref={inputDOM}
            type="text"
            className="text-capitalize"
            placeholder="enter a city"
            onChange={(e) => {
              userInput.current = e.target.value;
            }}
          />
          <Button
            // when the user press the button what will happen? (dispatch => )
            onClick={() => {
              startFetch.current = true;
              dispatch(
                APIStructure([userInput.current, "", "", "current", "en"])
              );
              inputDOM.current.value = "";
            }}
          >
            find
          </Button>
        </div>
        {weatherObject && weatherObject.weather ? (
          <div className="data p-3 d-flex">
            <>
              <div className="left">
                <h4>
                  {weatherObject.name}, {weatherObject.sys.country}
                </h4>
                <p>
                  Temperature: {(weatherObject.main.temp - 273).toFixed(2)} C
                </p>
                <p>Sky: {weatherObject.weather[0].description}</p>
                <p>Clouds : {weatherObject.clouds.all}%</p>
                <p>Wind Speed: {weatherObject.wind.speed} mph</p>
                <p>Wind Direction: {weatherObject.wind.deg} deg</p>
                <p>Humidity: {weatherObject.main.humidity}%</p>
                <p>Pressure: {weatherObject.main.pressure} mbar</p>
                <p>visibility : {weatherObject.visibility / 1000} Km</p>
              </div>
              <video
                src={settingVideo()[0].video}
                alt={settingVideo()[0].name}
                autoPlay
                loop
                muted
              />
            </>
          </div>
        ) : (
          <h3>Please, Write the city correctly.</h3>
        )}
      </Container>
    </div>
  );
};

export default GetWeather;
