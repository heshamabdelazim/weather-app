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
import mist from "../../videos/mist.mp4";
import { APIWeather } from "../apiStructure";

const GetWeather = () => {
  // ========== hoocks
  // let [result, setresult] = useState();
  let userCity = useRef();
  let inputDOM = useRef();

  // ========== Redux hocks
  let dispatch = useDispatch();
  let result = useSelector((state) => state).apiReducer;
  // ========== function
  const fetching = async () => {
    let res = await fetch(
      APIWeather(userCity.current, "", "", "current", "en")
    );
    let data = await res.json();
    dispatch(APIStructure(data));
  };
  // ========== function
  // const allVideos = [{},{},{}]

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
    { video: mist, name: "mist" },
  ];
  // ==========function
  const settingVideo = () => {
    return (
      result &&
      allVideos.filter((videoObj) => {
        return videoObj.name == result.weather[0].main.toLowerCase();
      })
    );
  };

  // ==========function
  const resultDOM = () => {
    if (!result) {
      return <h4 className="mb-4">What Cities you would like to travel?</h4>;
    }
    if (result) {
      if (result.weather) {
        // destructuring
        const {
          clouds: { all: A },
          main: { temp: T, pressure: P, humidity: H },
          wind: { speed: S, deg },
          visibility: V,
          sys: { country: C },
          name: N,
          weather: [{ description: D }],
        } = result;

        return (
          <div className="data p-3 d-flex">
            <>
              <div className="left">
                <h4>
                  {N}, {C}
                </h4>
                <p>Temperature: {(T - 273).toFixed(2)} C</p>
                <p>Sky: {D}</p>
                <p>Clouds : {A}%</p>
                <p>Wind Speed: {S} mph</p>
                <p>Wind Direction: {deg} deg</p>
                <p>Humidity: {H}%</p>
                <p>Pressure: {P} mbar</p>
                <p>visibility : {V / 1000} Km</p>
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
        );
      } else {
        return (
          <h3 className="text-center">Please, Write the city correctly.</h3>
        );
      }
    }
  };

  return (
    <div className="weather-section section ">
      <Container>
        <h2 className=" header ">
          City weather <span className="icon-cloud-sun-lightning fw-bold" />
        </h2>
        <div className="d-flex gap-2 aligen-items-center mb-3">
          <input
            ref={inputDOM}
            type="text"
            className="text-capitalize px-3"
            placeholder="enter a city"
            onChange={(e) => {
              userCity.current = e.target.value;
            }}
          />
          <Button
            // when the user press the button what will happen? (dispatch => )
            onClick={() => {
              fetching();
              inputDOM.current.value = "";
            }}
          >
            find
          </Button>
        </div>
        {resultDOM()} {/*This line has data and display videos*/}
      </Container>
    </div>
  );
};

export default GetWeather;
