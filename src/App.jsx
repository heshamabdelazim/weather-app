import { useEffect, useRef, useState } from "react";

// icons
import "./icons/style.css";
// videos

// componets
import Content from "./components/2-content/Content.jsx";
import Header from "./components/1-header/Header.jsx";
import GetWeather from "./components/3-weather/GetWeather.jsx";

// redux
import { useSelector } from "react-redux";
import Footer from "./components/4-footer/Footer.jsx";

function App() {
  // ========== hocks
  let [weather, setWeather] = useState("default");

  // =========== Redux hocks
  const showCityWeather = useSelector((state) => state).showCity;
  return (
    <div className={`weather-app ${weather}`}>
      <Header />
      <div className="above position-relative z-3">
        <Content />
        {showCityWeather && <GetWeather />}
      </div>
      <Footer />
    </div>
  );
}

export default App;
