import React from "react";

export default function Description({data}) {
    return (
<div className="row row1">
        <div className="Description col description">
          <div> {data.description} </div>
          <img
            src={data.icon}
            className="descriptionImg"
            alt={data.description}
          />
        </div>
      </div>
    )
}