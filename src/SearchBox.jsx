import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";


export default function SearchBox({ updateInfo }) {
     let [city, setCity] = useState("");
     let [error, setError] = useState(false);
     const API_URL = "https://api.openweathermap.org/data/2.5/weather";
     const API_KEY = "45350bd10e13c13bc3105688e9472cd7";

     let getWeatherInfo = async () => {
          try {
               let responce = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
               let jsonResponce = await responce.json();
               console.log(jsonResponce);

               let result = {
                    city: city,
                    temp: jsonResponce.main.temp,
                    tempMin: jsonResponce.main.temp_min,
                    tempMax: jsonResponce.main.temp_max,
                    humidity: jsonResponce.main.humidity,
                    feelsike: jsonResponce.main.feels_like,
                    weather: jsonResponce.weather[0].description,
               };

               console.log(result);
               return result;
          } catch (error) {
               throw error;
               

          }

     };




     let handleChange = (evt) => {
          setCity(evt.target.value);

     }

     let handleSubmit = async (evt) => {
          
          try {
               evt.preventDefault();
               console.log(city);
               setCity("");
               let newInfo = await getWeatherInfo();
               updateInfo(newInfo);
               setError(false); 
               
          } catch (error) {
               setError(true);
               
          }
     }
     return (
          <div className="SearchBox">
               <h3>search for weather</h3>
               <form onSubmit={handleSubmit}>
                    <TextField
                         id="city"
                         label="City Name"
                         variant="outlined"
                         required
                         value={city}
                         onChange={handleChange} />
                    <br></br><br></br>
                    <Button variant="contained" type="submit">
                         Search
                    </Button>
                    {error && <p style={{ color: "red" }}>No such place exists!</p>}
               </form>

          </div>
     )
}