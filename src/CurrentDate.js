import React from "react";

export default function CurrentDate({ newDate, timeZone }) {
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

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[weekMath(newDate.getDay())];
  let hours = hourMath();
  let minuets = minuetMath();
  return (
    <div className="CurrentDate">
      <div className="date">
        {day} {hours}:{minuets}{" "}
      </div>
    </div>
  );
}
