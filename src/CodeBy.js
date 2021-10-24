import React from "react";
import "./CodeBy.css";

export default function CodeBy() {
  return (
    <div className="CodeBy">
      <div className="row row5">
        <div className="col-12 codedBy">
          <a
            className="openSourceLink"
            href="https://github.com/TransformativeBeing/react-weather"
            title="react-weather github"
            target="_blank"
            rel="noreferrer"
          >
            Open-Source Code
          </a>
          <span> by </span>
          {/* <a
            className="profile"
            href="https://jessicanolte.netlify.app/"
            title="Jessica Nolte's Profile Website"
            target="_blank"
            rel="noreferrer"
          > */}
          Jessica N.
          {/* </a> */}
        </div>
        {/* <div>
          Hosted on{" "}
          <a
            className="hostedBy"
            href="https://discoverweather.netlify.app/"
            title="react-weather Netlify website"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </div> */}
      </div>
    </div>
  );
}
