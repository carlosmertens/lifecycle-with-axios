import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Title from "./Title";
// import SimpleFetch from "./SimpleFetch";
import Header from "./Header";
import Modal from "./Modal";

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
      isRaining: "",
      showModal: true,
    };
  }

  componentDidMount() {
    this.getCityWeather("Berlin");
    var elems = document.querySelectorAll(".modal");
    window.M.Modal.init(elems);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.weather !== prevState.weather) {
      const isRaining = this.state.weather.includes("rain");
      if (isRaining) {
        this.setState({ isRaining: "Rain, rain go away!!!" });
      }
    }
  }

  searchCity = (e) => {
    e.preventDefault();
    const city = document.getElementById("city").value;
    this.getCityWeather(city);
  };

  getCityWeather = (city) => {
    // TODO: Change API key to my own
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=e312dbeb8840e51f92334498a261ca1d`;

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
  };

  removeModal = () => {
    console.log("Modal will be reomve from DOM");
    this.setState({ showModal: false });
  };

  render() {
    const iconUrl = `http://openweathermap.org/img/wn/${this.state.icon}@2x.png`;

    return (
      <div className="App">
        <Title />

        <div className="modal-fetch">
          {/* Modal Trigger */}
          <div className="row">
            <div className="col s6 offset-s3">
              <Header
                cityName={this.state.cityName}
                isRaining={this.state.isRaining}
              />
              <a
                className="waves-effect waves-light btn modal-trigger"
                href="#modal1">
                Details
              </a>
              <form onSubmit={this.searchCity}>
                <input type="text" id="city" placeholder="Enter a city name" />
              </form>
            </div>
          </div>

          {this.state.showModal ? (
            <Modal
              iconUrl={iconUrl}
              cityName={this.state.cityName}
              temp={this.state.temp}
              high={this.state.high}
              low={this.state.low}
              weather={this.state.weather}
            />
          ) : (
            ""
          )}
          <button onClick={this.removeModal} className="btn">
            Remove Model
          </button>
        </div>
      </div>
    );
  }
}

export default App;
