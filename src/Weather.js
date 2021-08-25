import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import "./images/sunEmoji.png";

export default function Weather({ unit }) {
  const [city, setCity] = useState(" ");
  const [weather, setWeather] = useState({ ready: false });

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
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      temp: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed),
      humidity: Math.round(response.data.main.humidity),
      imgSunset: "./images/sunEmoji.png",
      sunrise: "06:05",
      sunset: "21:05",
      city: response.data.name,
      country: response.data.sys.country,
      date: "Tuesday 18:00",
    });
  }

  if (weather.ready && unit === "imperial") {
    return (
      <div className="Weather">
        <div className="row row1">
          <div className="col description">
            <div> {weather.description} </div>
            <img
              src={weather.icon}
              className="descriptionImg"
              alt={weather.description}
            />
          </div>
        </div>
        <div className="row row2">
          <div className="col-3 group1">
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
              <a href="/" alt="Celsius" className="unactiveTemp">
                C
              </a>
            </span>
          </div>
          <div className="col-3 group3">
            <div className="humidity">
              <span>{weather.humidity}</span>
              <span>%</span>
            </div>
            <div className="humidityLabel">Humidity</div>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="row row3 mt-2 mb-5">
            <div className="col set1">
              <img
                className="sunEmoji"
                type="image"
                src={weather.imgSunset}
                alt="Sunrise"
              />
              <div className="sunLabels">
                <span className="sunriseLabel"> Sunrise </span>
                <span> | </span>
                <span className="sunsetLabel"> Sunset </span>
              </div>
              <div className="sunTimes">
                <span className="sunriseTime"> {weather.sunrise} </span>
                <span> | </span>
                <span className="sunsetTime"> {weather.sunset} </span>
              </div>
            </div>
            <div className="col-4 set2">
              <div className="city">
                <span>
                  {weather.city}, {weather.country}
                </span>
              </div>
              <span className="search-bar">
                <input
                  onChange={handleCity}
                  className="form-control"
                  type="search"
                  autoFocus="on"
                  placeholder="Enter location... "
                />
              </span>
              <div className="date"> {weather.date} </div>
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
        <div className="weatherForecast"></div>
        <div className="row row5">
          <div className="col"> </div>
          <div className="col-7 codedBy">
            <a
              className="openSourceLink"
              href="https://github.com/TransformativeBeing/react-weather"
            >
              Open-Source Code
            </a>
            <span> by Jessica Nolte</span>
          </div>
          <div className="col"> </div>
        </div>
      </div>
    );
  }
  if (weather.ready && unit === "metric") {
    return (
      <div className="Weather">
        <div className="row row1">
          <div className="col description">
            <div> {weather.description} </div>
            <img
              src={weather.icon}
              className="descriptionImg"
              alt={weather.description}
            />
          </div>
        </div>
        <div className="row row2">
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
              <a href="/" alt="F" className="unactiveTemp">
                F
              </a>
            </span>
          </div>
          <div className="col-3 group3">
            <div className="humidity">
              <span>{weather.humidity}</span>
              <span>%</span>
            </div>
            <div className="humidityLabel">Humidity</div>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="row row3 mt-2 mb-5">
            <div className="col set1">
              <img
                className="sunEmoji"
                type="image"
                src={weather.imgSunset}
                alt="Sunrise"
              />
              <div className="sunLabels">
                <span className="sunriseLabel"> Sunrise </span>
                <span> | </span>
                <span className="sunsetLabel"> Sunset </span>
              </div>
              <div className="sunTimes">
                <span className="sunriseTime"> {weather.sunrise} </span>
                <span> | </span>
                <span className="sunsetTime"> {weather.sunset} </span>
              </div>
            </div>
            <div className="col-4 set2">
              <div className="city">
                <span>
                  {weather.city}, {weather.country}
                </span>
              </div>
              <span className="search-bar">
                <input
                  onChange={handleCity}
                  className="form-control"
                  type="search"
                  autoFocus="on"
                  placeholder="Enter location... "
                />
              </span>
              <div className="date"> {weather.date} </div>
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
        <div className="weatherForecast"></div>
        <div className="row row5">
          <div className="col"> </div>
          <div className="col-7 codedBy">
            <a
              className="openSourceLink"
              href="https://github.com/TransformativeBeing/react-weather"
            >
              Open-Source Code
            </a>
            <span> by Jessica Nolte</span>
          </div>
          <div className="col"> </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="Weather">
        <div className="row row1">
          <div className="col description">
            <div>Loading...</div>
            <img
              src={weather.icon}
              className="descriptionImg"
              alt={weather.description}
            />
          </div>
        </div>
        <div className="row row2">
          <div className="col-3 group1">
            <div>
              <span className="windEmoji">🌬</span>
              <span className="windSpeed">_ _</span>
            </div>
            <div>
              <span className="windUnit">mph</span>
            </div>
          </div>
          <div className="col-6 group2">
            <span className="temperature">_ _</span>
            <span className="fahrenheit">˚F</span>
          </div>
          <div className="col-3 group3">
            <div className="humidity">
              <span>_ _</span>
              <span>%</span>
            </div>
            <div className="humidityLabel">Humidity</div>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="row row3 mt-4 mb-5">
            <div className="col set1">
              <img
                className="sunEmoji"
                type="image"
                src={weather.imgSunset}
                alt="Sunrise"
              />
              <div className="sunLabels">
                <span className="sunriseLabel"> Sunrise </span>
                <span> | </span>
                <span className="sunsetLabel"> Sunset </span>
              </div>
              <div className="sunTimes">
                <span className="sunriseTime">_ _ : _ _</span>
                <span> | </span>
                <span className="sunsetTime">_ _ : _ _</span>
              </div>
            </div>
            <div className="col-4 set2">
              <div className="city">
                <span>Loading...</span>
              </div>
              <span className="search-bar">
                <input
                  onChange={handleCity}
                  className="form-control"
                  type="search"
                  autoFocus="on"
                  placeholder="Enter location... "
                />
              </span>
              <div className="date">Loading _ _ : _ _</div>
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
        <div className="weatherForecast"></div>
        <div className="row row5">
          <div className="col"> </div>
          <div className="col-7 codedBy">
            <a
              className="openSourceLink"
              href="https://github.com/TransformativeBeing/react-weather"
            >
              Open-Source Code
            </a>
            <span> by Jessica Nolte</span>
          </div>
          <div className="col"> </div>
        </div>
      </div>
    );
  }
}
