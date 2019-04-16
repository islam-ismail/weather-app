import React, { Component } from "react";
import Form from "./components/Form";
import Weather from "./components/Weather";
import "bootstrap/dist/css/bootstrap.min.css";

const API_Key = "c1b7dc8a7a085cf0bf98a9fb9f51d58a";

class App extends Component {
  state = {
    temprature: "",
    city: "",
    country: "",
    humidity: "",
    description: "",
    error: ""
  };

  getWeather = async e => {
    try {
      e.preventDefault();
      const city = e.target.elements.city.value;
      const country = e.target.elements.country.value;
      const api = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_Key}`
      );
      const data = await api.json();

      if (city && country) {
        this.setState({
          temprature: data.main.temp,
          city: data.name,
          country: data.sys.country,
          humidity: data.main.humidity,
          description: data.weather[0].description,
          error: ""
        });
      } else {
        this.setState({
          temprature: "",
          city: "",
          country: "",
          humidity: "",
          description: "",
          error: "Please Enter City and Country"
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <div className="wrapper">
        <div className="form-container">
          <Form getWeather={this.getWeather} />
          <Weather
            temprature={this.state.temprature}
            city={this.state.city}
            country={this.state.country}
            humidity={this.state.humidity}
            description={this.state.description}
            error={this.state.error}
          />
        </div>
      </div>
    );
  }
}

export default App;
