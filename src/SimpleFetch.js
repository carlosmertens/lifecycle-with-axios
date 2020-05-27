import React from "react";

export default function SimpleFetch(props) {
  return (
    <div className="simple-fetch">
      <p>
        Current weather in Berlin is <b>{props.temp}</b> Fahrenheit
      </p>
    </div>
  );
}
