import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import "./WeatherApp.css";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "delhi",
    feelslike: 37.05,
    humidity: 79,
    temp: 30.05,
    tempMax: 30.05,
    tempMin: 30.05,
    weather: "mist"
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  }


  return (
    <div className="main">
      <h1>Weather App By Pratiksha</h1>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}
