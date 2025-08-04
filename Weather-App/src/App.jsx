import { useEffect, useRef, useState } from 'react';
import './App.css';
import clear_icon from "./assets/clear.png";
import cloud_icon from "./assets/clouds.png";
import drizzle_icon from "./assets/drizzle.png";
import rain_icon from "./assets/rain.png";
import snow_icon from "./assets/snow.png";

function App() {
  const inputRef = useRef();
  const [weatherData, setweatherData] = useState(false);

  const allIcons = {
    "01d": clear_icon,
    "01n": clear_icon,
    "02d": cloud_icon,
    "02n": cloud_icon,
    "03d": cloud_icon,
    "03n": cloud_icon,
    "04d": drizzle_icon,
    "04n": drizzle_icon,
    "09d": rain_icon,
    "09n": rain_icon,
    "10d": rain_icon,
    "10n": rain_icon,
    "13d": snow_icon,
    "13n": snow_icon,
  };

  const search = async (city) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;
      const response = await fetch(url);
      const data = await response.json();

      const icon = allIcons[data.weather[0].icon] || clear_icon;
      setweatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: data.main.temp,
        temperature2: Math.floor(data.main.temp),
        location: data.name,
        country: data.sys.country,
        icon: icon,
        code: data.weather[0].id
      });
      
    } catch (error) {
      console.error("Error while fetching:", error);
    }
  };

  useEffect(() => {
    search("New York");
  }, []);

  return (
    <main>
      <header>
        <h1>Modern Weather App</h1>
        <div className="search-container">
          <input
            ref={inputRef}
            type="text"
            className="search-input"
            placeholder="Search for a city..."
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                search(inputRef.current.value);
              }
            }}
          />
          <button
            onClick={() => search(inputRef.current.value)}
            className="search-btn"
          >
            Search
          </button>
        </div>
      </header>

      {weatherData && (
        <section className="content">
          <h3>{weatherData.location}, {weatherData.country}</h3>
          <div className="weather">
            <p>{weatherData.temperature2}°C</p>
            <img className="weather-icon" src={weatherData.icon} width="70" alt="weather" />
          </div>
          <div className="wind-tem">
            <div className="tem">
              <h5>{weatherData.temperature}°C</h5>
              <p>Temperature</p>
            </div>
            <div className="wind">
              <h5>{weatherData.windSpeed} km/h</h5>
              <p>Wind Speed</p>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}

export default App;
