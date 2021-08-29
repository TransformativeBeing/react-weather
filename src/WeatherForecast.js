import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast({ data }) {
  return (
    <div className="WeatherForecast">
      <div class="row row4">
        <div class="col">
          <div class="day mb-2">Mon</div>
          <WeatherIcon weatherImg={data.icon} imgSize={34} />
          <div class="temp mt-2">
            <span class="high me-2">20˚</span>
            <span class="low">16˚</span>
          </div>
        </div>
        <div class="col">
          <div class="day mb-2">Mon</div>
          <WeatherIcon weatherImg={data.icon} imgSize={34} />
          <div class="temp mt-2">
            <span class="high me-2">20˚</span>
            <span class="low">16˚</span>
          </div>
        </div>
        <div class="col">
          <div class="day mb-2">Mon</div>
          <WeatherIcon weatherImg={data.icon} imgSize={34} />
          <div class="temp mt-2">
            <span class="high me-2">20˚</span>
            <span class="low">16˚</span>
          </div>
        </div>
        <div class="col">
          <div class="day mb-2">Mon</div>
          <WeatherIcon weatherImg={data.icon} imgSize={34} />
          <div class="temp mt-2">
            <span class="high me-2">20˚</span>
            <span class="low">16˚</span>
          </div>
        </div>
        <div class="col">
          <div class="day mb-2">Mon</div>
          <WeatherIcon weatherImg={data.icon} imgSize={34} />
          <div class="temp mt-2">
            <span class="high me-2">20˚</span>
            <span class="low">16˚</span>
          </div>
        </div>
      </div>
    </div>
  );
}
