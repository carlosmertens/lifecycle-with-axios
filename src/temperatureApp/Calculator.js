import React, { Component } from "react";
import BoilingVerdict from "./BoilingVerdict";
import TemperatureInput from "./TemperatureInput";

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { temperature: 0, scale: "Celsius" };
  }

  handleChange(e, scale) {
    this.setState({ temperature: e.target.value, scale: scale });
  }

  render() {
    const temperature = this.state.temperature;
    const scale = this.state.scale;
    let fTemp;
    let cTemp;
    if (scale === "Celsius") {
      // Convert celsius to fahrenheit
      fTemp = Math.round((temperature * 9) / 5 + 32);
      cTemp = temperature;
    } else if (scale === "Fahrenheit") {
      // Convert fahrenheit to celsius
      cTemp = Math.round(((temperature - 32) * 5) / 9);
      fTemp = temperature;
    }

    return (
      <fieldset>
        <TemperatureInput
          scale="Fahrenheit"
          handleChange={this.handleChange}
          temperature={fTemp}
        />
        <TemperatureInput
          scale="Celsius"
          handleChange={this.handleChange}
          temperature={cTemp}
        />
        <BoilingVerdict celsius={parseFloat(cTemp)} />
      </fieldset>
    );
  }
}

export default Calculator;
