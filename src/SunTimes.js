import React from "react";
import "./sunEmoji.png";

export default function SunTimes({ data }) {
  return (
    <div className="SunTimes col set1">
      <img
        className="sunEmoji"
        type="image"
        src={data.imgSunset}
        alt="sunEmoji"
      />
      <div className="sunLabels">
        <span className="sunriseLabel"> Sunrise </span>
        <span> | </span>
        <span className="sunsetLabel"> Sunset </span>
      </div>
      <div className="sunTimes">
        <span className="sunriseTime"> {data.sunrise} </span>
        <span> | </span>
        <span className="sunsetTime"> {data.sunset} </span>
      </div>
    </div>
  );
}
