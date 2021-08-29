import React from "react";
import { SpinnerRoundFilled } from "spinners-react";

export default function Loading({ size, color }) {
  return (
    <div className="Loading">
      <SpinnerRoundFilled size={size} color={color} />
    </div>
  );
}
