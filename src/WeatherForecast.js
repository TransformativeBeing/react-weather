import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "./Loading";
import "./WeatherForecast.css";
import ForecastDay from "./ForecastDay";

export default function WeatherForecast({ unit, data }) {
  const [forecast, setForecast] = useState(false);

  useEffect(() => {
    setForecast(false);
  }, [data.coord]);

  function forecastResponse(response) {
    //console.log(response.data);
    setForecast(response.data.daily);
  }
  function load() {
    const apiKey = `acde47caf66ba769e649bfd77d6c16aa`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=`;
    let apiLink = `${apiUrl}${data.lat}&lon=${data.lon}&units=${unit}&appid=${apiKey}`;
    axios.get(apiLink).then(forecastResponse);
  }

  if (forecast) {
    return (
      <div className="WeatherForecast">
        <div className="row row4">
          {forecast.map(function (dailyForecast, index) {
            if (index < 4) {
              return (
                <div className="col" key={index}>
                  <ForecastDay data={dailyForecast} timeZone={data.timeZone} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    load();

    return <Loading size="63" color="gray" />;
  }
}
