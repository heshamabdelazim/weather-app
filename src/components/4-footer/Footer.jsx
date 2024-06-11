import React, { useEffect, useRef, useState } from "react";
import "./Footer.css";
import { useDispatch, useSelector } from "react-redux";
import { Button, Container } from "react-bootstrap";
import {} from "../../RTK/slices/citySlice";
import { APIStructure } from "../../RTK/slices/apiSlice";
import Swal from "sweetalert2";

const Footer = () => {
  const dispatch = useDispatch();
  const dataBase = useSelector((state) => state);

  let [test, setTest] = useState(1);
  let [response, setResponse] = useState();
  let startFetch = useRef(true);

  useEffect(() => {
    if (startFetch.current) {
      fetching();
    }
  });

  async function fetching() {
    let res = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=gaza&exclude=current&lang=en&appid=59baed44bcb9c644463cb7d5986e0ab7&units=metric$ "
    );
    let data = await res.json();
    startFetch.current = false;
    setResponse(data);
  }
  console.log(response);
  return (
    <div className="footer section  ">
      <Container>
        <h2>Developed by Hesham Abdelazim Kamel</h2>
      </Container>
    </div>
  );
};

export default Footer;
