import React, { useEffect, useRef, useState } from "react";
// bootstrap
import { Button, Container } from "react-bootstrap";

// css file
import "./content.css";

//photoes
import leef from "../../videos/leef.png";
import { Link } from "react-router-dom";

//sweatAlert
import Swal from "sweetalert2";

//redux
import { useDispatch, useSelector } from "react-redux";
import { APIStructure } from "../../RTK/slices/apiSlice";
import { cityToggle } from "../../RTK/slices/citySlice";
import { saveLocation } from "../../RTK/slices/userLocation";

const Content = () => {
  //========= hoocks
  // let [startFetch, setStartFetch] = useState(false);
  let startFetch = useRef(true);
  //========= redux hoocks
  const dispatch = useDispatch();
  const myAPI = useSelector((state) => state).apiReducer;

  //========== useEffect()
  useEffect(() => {
    if (startFetch.current) {
      fetching();
    }
  });
  //========= function
  async function fetching() {
    const res = await fetch(myAPI);
    const data = await res.json();
    // getting the location and save it in Redux
    Swal.fire({
      title: `Your city is : ${data.name}`,
      icon: "info",
    });
    // then open the weather section
    dispatch(cityToggle(true));
    startFetch.current = false;
  }

  //========= function
  function gettingLocation() {
    // This function will work after the user allow access to his location.
    // So this function will get the location of the user and save it in Redux / after that start fetching
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;
        dispatch(APIStructure(["", lat, long, "current", "en"]));
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
  ////========= Function SWAL
  function pressed() {
    Swal.fire({
      title: "Locatoin Access",
      text: "Know your city weather?",
      icon: "question",
      showConfirmButton: true,
      showCancelButton: true,
      cancelButtonText: "Ignore",
      // intput
      input: "checkbox",
      inputPlaceholder: "allow gettign location",
      inputValue: 1, //this make the input checked
      inputValidator: (value) => {
        return value ? gettingLocation() : "press ignore";
      },
    });
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
