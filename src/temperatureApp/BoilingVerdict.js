import React from "react";
import "./style.css";

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p className="temp-boiling">The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}

export default BoilingVerdict;
