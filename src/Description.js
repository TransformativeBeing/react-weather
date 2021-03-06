import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function Description({ data }) {
  return (
    <div className="row row1">
      <div className="Description col description">
        <WeatherIcon weatherImg={data.icon} imgSize={64} />
        <div> {data.description} </div>
      </div>
    </div>
  );
}
