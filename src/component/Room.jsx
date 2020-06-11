import React, { useState } from "react";
import "../Room.css";

function Room() {
  let [isLit, setLit] = useState(true);
  let [checkTemperature, setTemperature] = useState(0);
  let brightness = isLit ? "light" : "dark";

  return (
    <div className={`room ${brightness}`}>
      This Room is : {isLit ? "Light" : "Dark"}
      <br />
      <button
        onClick={() => {
          setLit(!isLit);
        }}
      >
        Filp Anyway
      </button>{" "}
      |{" "}
      <button
        onClick={() => {
          setLit(true);
        }}
      >
        Turn ON
      </button>{" "}
      |{" "}
      <button
        onClick={() => {
          setLit(true);
        }}
      >
        Turn OFF
      </button>
      <br />
      <br />
      The Temperature is : {checkTemperature}
      <br />
      <button
        onClick={() => {
          setTemperature(++checkTemperature);
        }}
      >
        +
      </button>{" "}
      |{" "}
      <button
        onClick={() => {
          setTemperature(--checkTemperature);
        }}
      >
        -
      </button>
    </div>
  );
}

export default Room;
