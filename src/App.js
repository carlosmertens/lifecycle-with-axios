import React, { Component } from "react";
import "./App.css";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      temp: "",
    };
  }

  componentDidMount() {
    // TODO: Change API key to my own
    const url =
      "https://api.openweathermap.org/data/2.5/weather?q=Berlin&units=imperial&appid=e312dbeb8840e51f92334498a261ca1d";

    axios.get(url).then((resp) => {
      this.setState({ temp: resp.data.main.temp });
    });
  }

  render() {
    return (
      <div className="App">
        <h1>The Component Lifecycle and HTTP</h1>
        <p>
          Current weather in Berlin is <b>{this.state.temp}</b> Fahrenheit
        </p>
      </div>
    );
  }
}

export default App;
