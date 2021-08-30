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
  const [weather, setWeather] = useState({ ready: false });
  const [unit, setUnit] = useState("imperial");

  useEffect(() => {
    setWeather(false);
  }, [unit]);

  function showCelsius(event) {
    event.preventDefault();
    setUnit("metric");
  }
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("imperial");
  }
  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = `cebebe92bb0f992987113af37d5c411b`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=`;
    let apiLink = `${apiUrl}${city}&units=${unit}&appid=${apiKey}`;
    axios.get(apiLink).then(handleResponse);
  }

  function handleCity(event) {
    setCity(event.target.value);
  }
  function handleResponse(response) {
    //console.log(response.data);
    setWeather({
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

  if (weather.ready && unit === "imperial") {
    return (
      <div className="Weather">
        <Description data={weather} />
        <div className="row row2 mt-3">
          <div className="Wind col-3 group1">
            <div>
              <span className="windEmoji">🌬</span>
              <span className="windSpeed"> {weather.wind} </span>
            </div>
            <div>
              <span className="windUnit">mph</span>
            </div>
          </div>
          <div className="col-6 group2">
            <span className="temperature">{weather.temp}</span>
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
          <Humidity data={weather} />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="row row3">
            <SunTimes data={weather} timeZone={weather.timeZone} />
            <div className="col-4 set2">
              <div className="city">
                <span>
                  {weather.city}, {weather.country}
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
              <CurrentDate newDate={weather.date} timeZone={weather.timeZone} />
            </div>
            <div className="col-4 set3">
              <div>
                <span>
                  <button type="submit" className="searchButton">
                    Search
                  </button>
                </span>
                <span className="locationButton">
                  <button>
                    <i
                      className="fas fa-map-marker-alt location"
                      id="location"
                    ></i>
                  </button>
                </span>
              </div>
            </div>
          </div>
        </form>
        <WeatherForecast unit={unit} data={weather} />
        <CodeBy />
      </div>
    );
  }
  if (weather.ready && unit === "metric") {
    return (
      <div className="Weather">
        <Description data={weather} />
        <div className="row row2 mt-3">
          <div className="col-3 group1">
            <div>
              <span className="windEmoji">🌬</span>
              <span className="windSpeed"> {weather.wind} </span>
            </div>
            <div>
              <span className="windUnit">km/h</span>
            </div>
          </div>
          <div className="col-6 group2">
            <span className="temperature">{weather.temp}</span>
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
          <Humidity data={weather} />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="row row3">
            <SunTimes data={weather} timeZone={weather.timeZone} />
            <div className="col-4 set2">
              <div className="city">
                <span>
                  {weather.city}, {weather.country}
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
              <CurrentDate newDate={weather.date} timeZone={weather.timeZone} />
            </div>
            <div className="col-4 set3">
              <div>
                <span>
                  <button type="submit" className="searchButton">
                    Search
                  </button>
                </span>
                <span className="locationButton">
                  <button>
                    <i className="fas fa-map-marker-alt location"> </i>
                  </button>
                </span>
              </div>
            </div>
          </div>
        </form>
        <WeatherForecast data={weather} />
        <CodeBy />
      </div>
    );
  } else {
    let apiKey = `cebebe92bb0f992987113af37d5c411b`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=`;
    let apiLink = `${apiUrl}${city}&units=${unit}&appid=${apiKey}`;
    axios.get(apiLink).then(handleResponse);
    return (
      <div className="Weather">
        <Loading size="500" color="rgba(211, 211, 211, 0.6)" />
      </div>
    );
  }
}
