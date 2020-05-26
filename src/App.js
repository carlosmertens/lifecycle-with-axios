import React from "react";
import "./App.css";
import axios from "axios";

function App() {
  // TODO: Change to own API key
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=Berlin&units=imperial&appid=e312dbeb8840e51f92334498a261ca1d";

  axios.get(url).then((resp) => {
    console.log(resp.data);
  });

  return (
    <div className="App">
      <h1>Sanity Check</h1>
    </div>
  );
}

export default App;
