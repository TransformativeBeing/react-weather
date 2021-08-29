import React from "react";
import { SpinnerRoundFilled } from "spinners-react";

export default function Loading() {
  return (
    <div className="Loading">
      <SpinnerRoundFilled size={500} color="rgba(211, 211, 211, 0.6)" />
    </div>
  );
}
