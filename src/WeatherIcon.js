import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon({ weatherImg, imgSize }) {
  const weatherCode = {
    "01d": "CLEAR_DAY",
    "01n": "CLEAR_NIGHT",
    "02d": "PARTLY_CLOUDY_DAY",
    "02n": "PARTLY_CLOUDY_NIGHT",
    "03d": "CLOUDY",
    "03n": "CLOUDY",
    "04d": "CLOUDY",
    "04n": "CLOUDY",
    "09d": "RAIN",
    "09n": "RAIN",
    "10d": "RAIN",
    "10n": "RAIN",
    "11d": "RAIN",
    "11n": "RAIN",
    "13d": "SNOW",
    "13n": "SNOW",
    "50d": "FOG",
    "50n": "FOG",
  };
  const weatherColor = {
    CLEAR_DAY: "orange",
    CLEAR_NIGHT: "#79C2D0",
    PARTLY_CLOUDY_DAY: "lightgray",
    PARTLY_CLOUDY_NIGHT: "darkgray",
    CLOUDY: "gray",
    RAIN: "#4da0e4",
    SNOW: "lightgray",
    FOG: "lightgray",
  };
  let code = weatherCode[weatherImg];

  return (
    <div className="WeatherIcon">
      <ReactAnimatedWeather
        icon={weatherCode[weatherImg]}
        color={weatherColor[code]}
        size={imgSize}
        animate={true}
      />
    </div>
  );
}
