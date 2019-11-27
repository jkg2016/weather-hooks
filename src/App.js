import React, {useState} from 'react';
import './App.css';
import Form from './Form';
import Weather from './Weather';

function App() {
  const [weather, setWeather] = useState([])
  const API = 'https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID='
  const APIKEY = process.env.REACT_APP_OPEN_WEATHER_KEY;
  console.log(APIKEY);
  console.log(API + APIKEY);
  async function fetchData(e)
  {
    e.preventDefault()
    const apiData = await fetch (API + APIKEY)
    .then (res => res.json())
    .then (data => data)
    setWeather({
      data: apiData,
      city: apiData.city,
      country: apiData.sys.country,
      description: apiData.weather[0].description,
      temperature: apiData.main.temp,
      error:""
    })
  }
  return (
    <div className="App">
        <h3>WEATHER APP</h3>
        <Form getWeather={fetchData} />
        <Weather
          city={weather.city}
          country={weather.country}
          description={weather.description}
          temperature={weather.temperature}
          error={weather.error}
      />
        {console.log(weather.data)}
    </div>
  );
}

export default App;
