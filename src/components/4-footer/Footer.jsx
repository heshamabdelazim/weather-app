import React, { useEffect, useRef, useState } from "react";
import "./Footer.css";
import { useDispatch, useSelector } from "react-redux";
import { Button, Container } from "react-bootstrap";
import {} from "../../RTK/slices/citySlice";
import { APIStructure } from "../../RTK/slices/apiSlice";
import Swal from "sweetalert2";

const Footer = () => {
  let labelDom = useRef();
  let textareaDom = useRef();
  let submitDom = useRef();
  console.log("Footer rendered");
  //============== social of the contacts
  const allSocial = [
    {
      herf: "https://www.linkedin.com/in/hesham-abdelazim-678759283/",
      iconClass: "icon-linkedin",
      title: "Hesham's LinkedIn",
    },
    {
      herf: "https://wa.me/+201212005626",
      iconClass: "icon-whatsapp",
      title: "Hesham's Whatsapp",
    },
    {
      herf: "https://www.facebook.com/hesham.abdelazim.94",
      iconClass: "icon-facebook2",
      title: "Hesham's FaceBook",
    },
    {
      herf: "https://github.com/heshamabdelazim",
      iconClass: "icon-github",
      title: "Hesham's Github",
    },
  ];
  const puttingSocial = allSocial.map(function (social, index) {
    return (
      <a
        href={`${social.herf}`}
        target="_blank"
        title={social.title}
        key={index}
      >
        <span className={social.iconClass} />
      </a>
    );
  });

  // ============= Thanks content
  const thanksLis = [
    {
      content: "Free weather API from",
      href: "https://openweathermap.org/",
      hrefName: "Open-Weather",
    },
    {
      content: "Free impressive quality videos from",
      href: "https://www.pexels.com/search/videos/beach%20sunny%20day/",
      hrefName: "Pexels",
    },
    {
      content: "Free PNG images from",
      href: "https://www.pexels.com/search/videos/beach%20sunny%20day/",
      hrefName: "Raw-Pixel",
    },
  ];
  const puttingLis = thanksLis.map((li, index) => {
    return (
      <li key={index} className="d-flex align-items-center gap-2">
        <span className="icon-cloud-sun-lightning" />
        {li.content}
        <a href={li.href} target="_blank">
          {li.hrefName}
        </a>
      </li>
    );
  });

  // ============= function
  function focusing() {
    textareaDom.current.classList.add("pressed");
    labelDom.current.classList.add("pressed");
    submitDom.current.classList.add("pressed");
  }

  // ============= function
  function bluring() {
    if (textareaDom.current.value.length == 0) {
      labelDom.current.classList.remove("pressed");
      textareaDom.current.classList.remove("pressed");
      submitDom.current.classList.remove("pressed");
    }
  }

  return (
    <footer className="footer section  ">
      <Container>
        <div className="top ">
          <div className="hero  ">
            <h5 className="m-0">Developed by :</h5>
            <h4 className="m-0">Hesham Abdelazim Kamel</h4>
            <div className="social d-flex gap-4">{puttingSocial}</div>
          </div>
          <div className="thanks">
            <h5 className="m-0">Thanks to:</h5>
            <ul>{puttingLis}</ul>
          </div>
          <div className="message  ">
            <div className="message-form">
              <label htmlFor="message" ref={labelDom}>
                Message?
              </label>
              <textarea
                ref={textareaDom}
                style={{ resize: "none" }}
                name="message"
                id="message"
                onFocus={() => focusing()}
                onBlur={() => bluring()}
              />
              <input type="submit" ref={submitDom} />
            </div>
          </div>
        </div>
        <hr />
        <div className="left d-flex justify-content-center">
          {"\u00a9"} {new Date().getFullYear()} all rights reserved.{" "}
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
