import React from "react";
import "./Humidity.css"

export default function Humidity({data}) {
    return (
        <div className="col-3 group3">
          <div className="humidity">
            <span>{data.humidity}</span>
            <span>%</span>
          </div>
          <div className="humidityLabel">Humidity</div>
        </div>
    )
}