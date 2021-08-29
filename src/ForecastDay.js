import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay({ data, timeZone }) {
  function weekMath(weekDay) {
    let offSet = newDate.getTimezoneOffset() / -60;
    let hour = newDate.getHours();
    let time = hour - offSet + timeZone;

    if (time > 24 && weekDay > 6) {
      return (weekDay = 0);
    }
    if (time > 24 && weekDay < 6) {
      return weekDay + 1;
    }
    if (time < 0 && weekDay < 0) {
      return (weekDay = 6);
    }
    if (time < 0 && weekDay > 0) {
      return weekDay;
    } else {
      return weekDay;
    }
  }

  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  let newDate = data.day;
  let day = days[weekMath(newDate.getDay())];
  /*{
      ready: true,
      day: new Date(response.data.daily[0].dt * 1000),
      icon: response.data.daily[0].weather[0].icon,
      maxTemp: Math.round(response.data.daily[0].temp.max),
      minTemp: Math.round(response.data.daily[0].temp.min),
    }*/
  return (
    <div className="ForecastDay">
      <div className="day mb-2">{day}</div>
      <WeatherIcon weatherImg={data.icon} imgSize={34} />
      <div className="temp mt-2">
        <span className="high me-2">{data.maxTemp}˚</span>
        <span className="low">{data.minTemp}˚</span>
      </div>
    </div>
  );
}
