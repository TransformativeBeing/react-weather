import React from "react";
import sunEmoji from "./sunEmoji.png";

export default function SunTimes({ data, timeZone }) {
  function setSunTime(newDate) {
    function timeMath(hour) {
      let offSet = newDate.getTimezoneOffset() / -60;
      let time = hour - offSet + timeZone;

      if (time > 24) {
        return time - 24;
      }
      if (time < 0) {
        return time + 24;
      } else {
        return time;
      }
    }

    function hourMath() {
      let hour = newDate.getHours();
      let hourInput = timeMath(hour);

      if (hourInput >= 10) {
        return hourInput;
      } else {
        return `0${hourInput}`;
      }
    }

    function minuetMath() {
      let minuetInput = newDate.getMinutes();
      if (minuetInput >= 10) {
        return minuetInput;
      } else {
        return `0${minuetInput}`;
      }
    }

    let hours = hourMath();
    let minuets = minuetMath();

    return `${hours}:${minuets}`;
  }
  return (
    <div className="SunTimes col set1">
      <img className="sunEmoji" type="image" src={sunEmoji} alt="sunEmoji" />
      <div className="sunLabels">
        <span className="sunriseLabel"> Sunrise </span>
        <span> | </span>
        <span className="sunsetLabel"> Sunset </span>
      </div>
      <div className="sunTimes">
        <span className="sunriseTime"> {setSunTime(data.sunrise)} </span>
        <span> | </span>
        <span className="sunsetTime"> {setSunTime(data.sunset)} </span>
      </div>
    </div>
  );
}
