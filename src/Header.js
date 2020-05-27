import React from "react";

export default function Header(props) {
  return (
    <>
      <h3>{props.cityName}</h3>
      <p>{props.isRaining}</p>
    </>
  );
}
