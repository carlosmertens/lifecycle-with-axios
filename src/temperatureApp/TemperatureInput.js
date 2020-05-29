import React, { Component } from "react";

class TemperatureInput extends Component {
  render() {
    const temperature = this.props.temperature;
    let style;
    if (temperature > 100) {
      style = {
        color: "red",
        backgroundColor: "yellow",
      };
    }
    return (
      <div>
        <legend style={style}>Enter temperature in {this.props.scale}:</legend>
        <input
          value={temperature}
          onChange={(e) => {
            this.props.handleChange(e, this.props.scale);
          }}
        />
      </div>
    );
  }
}

export default TemperatureInput;
