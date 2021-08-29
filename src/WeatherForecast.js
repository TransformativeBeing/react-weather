import React, { useState } from "react";
import axios from "axios";
import Loading from "./Loading";
import "./WeatherForecast.css";
import ForecastDay from "./ForecastDay";

export default function WeatherForecast({ unit, data }) {
  const [forecast, setForecast] = useState({ ready: false });

  function forecastResponse(response) {
    //console.log(response.data);
    setForecast({
      ready: true,
      day: new Date(response.data.daily[0].dt * 1000),
      icon: response.data.daily[0].weather[0].icon,
      maxTemp: Math.round(response.data.daily[0].temp.max),
      minTemp: Math.round(response.data.daily[0].temp.min),
    });
  }

  if (forecast.ready && unit === "imperial") {
    return (
      <div className="WeatherForecast">
        <ForecastDay data={forecast} timeZone={data.timeZone} />
      </div>
    );
  } else {
    const apiKey = `cebebe92bb0f992987113af37d5c411b`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=`;
    let apiLink = `${apiUrl}${data.lat}&lon=${data.lon}&units=${unit}&appid=${apiKey}`;
    //axios.get(apiLink).then(forecastResponse);

    return <Loading size="63" color="gray" />;
  }
}
