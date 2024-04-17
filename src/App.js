import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import CityNotFound from './modules/CityNotFound';
import SearchComponent from './modules/SearchComponent';
import WeatherComponent from './modules/WeatherComponent';

export const WeatherIcons = {
  "01d": "/weather/icons/sunny.svg",
  "01n": "/weather/icons/night.svg",
  "02d": "/weather/icons/day.svg",
  "02n": "/weather/icons/cloudy-night.svg",
  "03d": "/weather/icons/cloudy.svg",
  "03n": "/weather/icons/cloudy.svg",
  "04d": "/weather/icons/perfect-day.svg",
  "04n": "/weather/icons/cloudy-night.svg",
  "09d": "/weather/icons/rain.svg",
  "09n": "/weather/icons/rain-night.svg",
  "10d": "/weather/icons/rain.svg",
  "10n": "/weather/icons/rain-night.svg",
  "11d": "/weather/icons/storm.svg",
  "11n": "/weather/icons/storm.svg",
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 10px;
  border-radius: 4px;
  width: 380px;
  font-family: Montserrat;
`;

const AppLabel = styled.span`
  font-size: 28px;
  color: solid black;
  font-weight: bolder;
  margin: 20px 25px 10px;
  text-align: center;
  width: 90%;
`;

function App() {
  const [cityFound, updateCityFound] = useState(true);
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();

  const fetchWeather = async (e) => {
    e.preventDefault();
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fe4feefa8543e06d4f3c66d92c61b69c`)
    .then((res) => {
      updateWeather(res.data);
      updateCityFound(true);
    })
    .catch((err) => {
      updateCityFound(false);
    });
};

  return (
    <Container>
      <AppLabel><span>Weather App</span></AppLabel>
      {weather && cityFound ? (
        <React.Fragment>
          <SearchComponent updateCity={updateCity} fetchWeather={fetchWeather} />
          <WeatherComponent weather={weather} city={city} />
        </React.Fragment>
      ) : (
        <SearchComponent updateCity={updateCity} fetchWeather={fetchWeather} />
      )}
      {cityFound ? null : <CityNotFound />}
    </Container>
  );
}

export default App;
