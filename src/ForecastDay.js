import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay({ data, timeZone }) {
  function weekMath(week) {
    let offSet = newDate.getTimezoneOffset() / -60;
    let hour = newDate.getHours();
    let time = hour - offSet + timeZone;

    if (time > 24 && week > 6) {
      return (week = 0);
    }
    if (time > 24 && week < 6) {
      return week + 1;
    }
    if (time < 0 && week < 0) {
      return (week = 6);
    }
    if (time < 0 && week > 0) {
      return week;
    } else {
      return week;
    }
  }

  let info = {
    ready: true,
    day: new Date(data.dt * 1000),
    icon: data.weather[0].icon,
    maxTemp: Math.round(data.temp.max),
    minTemp: Math.round(data.temp.min),
  };
  let newDate = info.day;
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let day = days[weekMath(newDate.getDay())];

  return (
    <div className="ForecastDay">
      <div className="day mb-2">{day}</div>
      <WeatherIcon weatherImg={info.icon} imgSize={34} />
      <div className="temp mt-2">
        <span className="high me-1">{info.maxTemp}˚</span>
        <span className="low">{info.minTemp}˚</span>
      </div>
    </div>
  );
}
