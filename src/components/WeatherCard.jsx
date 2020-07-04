import React, { useState, useEffect } from "react";
import WeatherDetailes from "./WeatherDetailes";
import SearchBar from "./SearchBar";
import axios from "axios";
import coldBG from "../images/cold-bg.jpg";
import warmBG from "../images/warm-bg.jpg";
import Preview from "../images/Preview.svg";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/WeatherCardStyles";

const api = {
  base: "https://api.openweathermap.org/data/2.5/weather",
  key: "342e9b937de2ddaefa0cd13ec1b81e54",
};

function WeatherCard({ classes }) {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState("");

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(
          `${api.base}?q=${query}&appid=${api.key}&units=metric`
        );
        setWeather(response.data);
        setQuery("");
      } catch (e) {
        console.error(e);
      }
    }
    getData();
  }, [query]);

  const cityName = (newCityName) => {
    setQuery(newCityName);
  };

  return (
    <div
      className={classes.card}
      style={{
        backgroundImage:
          typeof weather.main != "undefined" && weather.main.temp >= 18
            ? `url(${warmBG})`
            : `url(${coldBG})`,
      }}>
      <SearchBar query={query} cityName={cityName} />
      {typeof weather.main != "undefined" ? (
        <WeatherDetailes weather={weather} />
      ) : (
        <img src={Preview} alt='preview' />
      )}
    </div>
  );
}

export default withStyles(styles)(WeatherCard);
