import React, { useEffect, useRef, useState } from "react";
// bootstrap
import { Button, Container } from "react-bootstrap";

// css file
import "./content.css";

//photoes
import sea from "../../videos/weather.png";
import leef from "../../videos/leef.png";
import { Link } from "react-router-dom";

//sweatAlert
import Swal from "sweetalert2";

//redux
import { useDispatch, useSelector } from "react-redux";
import { APIStructure } from "../../RTK/slices/apiSlice";
import { cityToggle } from "../../RTK/slices/citySlice";
import { APIWeather } from "../apiStructure";

const Content = () => {
  //========= redux hoocks
  const dispatch = useDispatch();
  const myDB = useSelector((state) => state);
  const myAPI = myDB.apiReducer;

  ////========= Function
  function pressed() {
    !myDB.showCity && dispatch(cityToggle(true));
    Swal.fire({
      html: `
        <h2><strong>Location Access</strong></h2>
        <h4>Know your city weather?</h4>
      `,
      icon: "question",
      // customization
      width: "350",
      background: ` url(${sea})`,
      color: "#000000",
      backdrop: `
        rgb(238 238 238 / 10%)  
      `,
      showConfirmButton: true,
      showCancelButton: true,
      cancelButtonText: "Ignore",
      // intput
      input: "checkbox",
      inputPlaceholder: "allow gettign location",
      inputValue: 1, //this make the input checked
      inputValidator: (value) => {
        return value ? gettingLocation() : "Press Ignore";
      },
    });
  }

  //========= function
  function gettingLocation() {
    // This function will work after the user allow access to his location.
    // So this function will get the location of the user and save it in Redux / after that start fetching
    // navigator.geolocation.getCurrentPosition(function(), function())

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;
        fetching(lat, long);
      },
      (error) => {
        Swal.fire({
          icon: "warning",
          html: `
          <h2>Location Denied</h2>
          `,
        });
      }
    );
  }
  //========= function
  async function fetching(lat, long) {
    console.log("fetching start");
    const res = await fetch(APIWeather("", lat, long, "current", "en"));
    const data = await res.json();
    dispatch(APIStructure(data));
    Swal.fire({
      title: `Your city is : ${data.name}`,
      icon: "info",
    });
    // then open the weather section
  }

  const allServ = [
    "temperature",
    "sky",
    "visibility",
    "wind",
    "humidity",
    "pressure",
  ];
  return (
    <div className="content section">
      <img src={leef} alt="leef" draggable="false" />
      <Container>
        <h2 className="header">
          App services
          <span className="icon-miscellaneous_services" />
        </h2>
        <div>
          <p>Based on a particular city choosen, It provides: </p>
          <ul>
            {allServ.map((ele, ind) => (
              <li key={ind}>
                <span className="icon-cloud-sun-lightning" />
                <span>{ele}</span>
              </li>
            ))}
          </ul>
          <Button
            onClick={() => {
              pressed();
            }}
          >
            <p className="m-0">Let's get started?</p>
            <span className="icon-arrow-long-right" />
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Content;
