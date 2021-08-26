import React from "react";

export default function Date({ newDate, timeZone }) {
  console.log(newDate);
  console.log(timeZone);
  /*function timeMath(hour) {
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

  function weekMath(week) {
    let offSet = newDate.getTimezoneOffset() / -60;
    let hour = newDate.getHours();
    let time = hour - offSet + timeZone;

    if (time > 24) {
      week + 1;
      if (week > 6) {
        return (week = 0);
      } else {
        return week;
      }
    }
    if (time < 0) {
      week - 1;
      if (week < 0) {
        return (week = 6);
      } else {
        return week;
      }
    } else {
      return week;
    }
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];*/

  /* let day = days[weekMath(newDate.getDay())];
  let hours = hourMath();
  let minuets = minuetMath();*/
  return (
    <div className="Date">
      <div>Monday</div>
    </div>
  );
}
