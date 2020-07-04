import React from "react";
import moment from "moment";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/WeatherDetailesStyles";

function WeatherDetailes({ classes, weather }) {
  const temp = Math.round(weather.main.temp);
  return (
    <div className={classes.detailesCard}>
      <div className={classes.detailesWrapper}>
        <h3>{temp}°</h3>
        <h2>{`${weather.name}, ${weather.sys.country}`}</h2>
        <h4>{weather.weather[0].main}</h4>
        <p>{moment().format("dddd Do YYYY")}</p>
      </div>
    </div>
  );
}
export default withStyles(styles)(WeatherDetailes);
