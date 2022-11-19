import { useState } from "react";
import { WEATHER_API_KEY, WEATHER_API_URL } from "./api";
import "./App.css";
import CurrentWeather from "./components/current-weather/current-weather";
import Search from "./components/search/search";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [foreacast, setForeacast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lan, lot] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lan}&lon=${lot}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastrFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lan}&lon=${lot}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastrFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();
        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForeacast({ city: searchData.label, ...forecastResponse });
      })
      .catch((err) => console.log(err));
  };
  console.log(currentWeather);
  console.log(foreacast);

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
    </div>
  );
}

export default App;
