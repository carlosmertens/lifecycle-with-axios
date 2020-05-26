import React, { Component } from "react";
import "./App.css";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      cityName: "",
      temp: "",
      high: "",
      low: "",
      weather: "",
      icon: "",
    };
  }

  componentDidMount() {
    // TODO: Change API key to my own
    const url =
      "https://api.openweathermap.org/data/2.5/weather?q=Berlin&units=imperial&appid=e312dbeb8840e51f92334498a261ca1d";

    axios.get(url).then((resp) => {
      this.setState({
        cityName: resp.data.name,
        temp: resp.data.main.temp,
        high: resp.data.main.temp_max,
        low: resp.data.main.temp_min,
        weather: resp.data.weather[0].description,
        icon: resp.data.weather[0].icon,
      });
    });

    var elems = document.querySelectorAll(".modal");
    window.M.Modal.init(elems);
  }

  render() {
    const iconUrl = `http://openweathermap.org/img/wn/${this.state.icon}@2x.png`;

    return (
      <div className="App">
        <div className="header">
          <h1>The Component Lifecycle and HTTP</h1>
          <hr />
        </div>

        <div className="simple-fetch">
          <p>
            Current weather in Berlin is <b>{this.state.temp}</b> Fahrenheit
          </p>
          <hr />
        </div>

        <div className="modal-fetch">
          {/* Modal Trigger */}
          <a
            className="waves-effect waves-light btn modal-trigger"
            href="#modal1">
            {this.state.cityName}
          </a>

          {/* Modal Structure */}
          <div id="modal1" className="modal">
            <div className="modal-content">
              <h4>{this.state.temp} Fahrenheit</h4>
              <p>
                High: {this.state.high} | Low: {this.state.low}
              </p>
              <p>
                {this.state.weather} <img src={iconUrl} alt="" />
              </p>
            </div>
            <div className="modal-footer">
              <a
                href="#!"
                className="modal-close waves-effect waves-green btn-flat">
                Close
              </a>
            </div>
          </div>
          <hr />
        </div>
      </div>
    );
  }
}

export default App;
