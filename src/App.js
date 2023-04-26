import Description from './Description';
import './App.css';
import React, { useState } from 'react';
const api = {
  key: "cabe4f9b4a90578285781adb4b1c07a0",
  baseURL: "https://api.openweathermap.org/data/2.5/",
}

function App() {

  const [query, setQuery] = useState('')
  const [weather, setWeather] = useState({})

  const search = e => {
    if (e.key === "Enter") {
      fetch (`${api.baseURL}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setQuery('')
          setWeather(result)})
    }
  }


  const dateBuilder = (d) => {
    let months = [
      "January", "February" , "March", "April", "May", "June", "July",
      "August" , "September", "October", "November", "December"
    ];

    let days = [
      "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month =months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  return (
    <div className="app">
      <main>
        <div className="app">
          <input 
            type='text'
            className='search-bar'
            placeholder='Search...'  
            onChange={e =>setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
            />
        </div>
        {(typeof weather.main != "undefined")? (
        <div>
          <div className='location-box'>
            <div className='location'>{weather.name}, {weather.sys.country}</div>
            <div className='date'>{dateBuilder(new Date())}</div>
          </div>
          <div className='weather-box'>
            <div className='temp'>
              {Math.round(weather.main.temp)} °C
            </div>
            <div className='weather'>
              {weather.weather[0].main}
            </div>
          </div>
        </div>
        ) : ('')}
      </main>
      <Description/>
    </div>
  );
}

export default App;

