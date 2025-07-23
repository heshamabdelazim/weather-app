import React, { useRef, useState } from "react";
import "./Footer.css";
import { Container } from "react-bootstrap";
import {} from "../../RTK/slices/citySlice";
import { APIStructure } from "../../RTK/slices/apiSlice";

const Footer = () => {
  let [isFocused, setIsFocused] = useState(false);

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

  // ============= function
  function bluring(e) {
    if (e.target.value.length == 0) {
      setIsFocused(false);
    }
    // setIsFocused(false);
  }

  const classPress = isFocused ? "pressed" : "";
  return (
    <footer className="footer section  ">
      <Container>
        <div className="top ">
          <div className="hero  ">
            <h5 className="m-0">Developed by:</h5>
            <h4 className="m-0">Hesham Abdelazim Kamel</h4>
            <div className="social d-flex gap-4">{puttingSocial}</div>
          </div>
          <div className="thanks">
            <h5 className="m-0">Thanks to:</h5>
            <ul>{puttingLis}</ul>
          </div>
          <div className={"message " + classPress}>
            <div className="message-form">
              <label htmlFor="message" className={classPress}>
                Message?
              </label>
              <textarea
                style={{ resize: "none" }}
                name="message"
                id="message"
                className={classPress}
                onFocus={() => setIsFocused(true)}
                onBlur={(e) => bluring(e)}
              />
              <input type="submit" className={" " + classPress} />
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
