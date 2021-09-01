import React, { useState, useEffect } from "react";
import axios from "axios";
import Description from "./Description";
import Humidity from "./Humidity";
import SunTimes from "./SunTimes";
import CurrentDate from "./CurrentDate";
import WeatherForecast from "./WeatherForecast";
import CodeBy from "./CodeBy";
import Loading from "./Loading";
import "./Weather.css";

export default function Weather({ place }) {
  const [city, setCity] = useState(place);
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [unit, setUnit] = useState("imperial");

  useEffect(() => {
    setWeatherData(false);
  }, [unit]);

  function showCelsius(event) {
    event.preventDefault();
    setUnit("metric");
  }
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("imperial");
  }
  function search() {
    let apiKey = `acde47caf66ba769e649bfd77d6c16aa`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=`;
    let apiLink = `${apiUrl}${city}&units=${unit}&appid=${apiKey}`;
    axios.get(apiLink).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCity(event) {
    setCity(event.target.value);
  }
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      temp: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed),
      humidity: Math.round(response.data.main.humidity),
      sunrise: new Date(response.data.sys.sunrise * 1000),
      sunset: new Date(response.data.sys.sunset * 1000),
      city: response.data.name,
      country: response.data.sys.country,
      date: new Date(response.data.dt * 1000),
      timeZone: response.data.timezone / 3600,
      lat: response.data.coord.lat,
      lon: response.data.coord.lon,
    });
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <div className="row row3">
        <SunTimes data={weatherData} timeZone={weatherData.timeZone} />
        <div className="col-4 set2">
          <div className="city">
            <span>
              {weatherData.city}, {weatherData.country}
            </span>
          </div>
          <span>
            <input
              onChange={handleCity}
              className="form-control search-bar"
              type="search"
              autoFocus="on"
              placeholder="Enter city... "
            />
          </span>
          <CurrentDate
            newDate={weatherData.date}
            timeZone={weatherData.timeZone}
          />
        </div>
        <div className="col-4 set3">
          <div>
            <button type="submit" className="searchButton">
              Search
            </button>
          </div>
        </div>
      </div>
    </form>
  );

  if (weatherData.ready && unit === "imperial") {
    return (
      <div className="Weather">
        <div className="container">
          <Description data={weatherData} />
          <div className="row row2 mt-2">
            <div className="Wind col-3 group1">
              <div>
                <span className="windEmoji">🌬</span>
                <span className="windSpeed"> {weatherData.wind} </span>
              </div>
              <div>
                <span className="windUnit">mph</span>
              </div>
            </div>
            <div className="col-6 group2">
              <span className="temperature">{weatherData.temp}</span>
              <span className="tempUnits">
                <span className="activeTemp">˚F</span>
                <span> | </span>
                <a
                  href="/"
                  alt="Celsius"
                  className="unactiveTemp"
                  onClick={showCelsius}
                >
                  C
                </a>
              </span>
            </div>
            <Humidity data={weatherData} />
          </div>
          {form}
          <WeatherForecast unit={unit} data={weatherData} />
          <CodeBy />
        </div>
      </div>
    );
  }
  if (weatherData.ready && unit === "metric") {
    return (
      <div className="Weather">
        <div className="container">
          <Description data={weatherData} />
          <div className="row row2 mt-2">
            <div className="col-3 group1">
              <div>
                <span className="windEmoji">🌬</span>
                <span className="windSpeed"> {weatherData.wind} </span>
              </div>
              <div>
                <span className="windUnit">km/h</span>
              </div>
            </div>
            <div className="col-6 group2">
              <span className="temperature">{weatherData.temp}</span>
              <span className="tempUnits">
                <span className="activeTemp">˚C</span>
                <span> | </span>
                <a
                  href="/"
                  alt="Fahrenheit"
                  className="unactiveTemp"
                  onClick={showFahrenheit}
                >
                  F
                </a>
              </span>
            </div>
            <Humidity data={weatherData} />
          </div>
          {form}
          <WeatherForecast data={weatherData} />
          <CodeBy />
        </div>
      </div>
    );
  } else {
    search();
    return (
      <div className="Weather">
        <Loading size="500" color="rgba(211, 211, 211, 0.6)" />
      </div>
    );
  }
}
