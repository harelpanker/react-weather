import React from "react";
import Navbar from "./components/layout/Navbar";
import WeatherCard from "./components/WeatherCard";
import Footer from "./components/layout/Footer";
import { withStyles } from "@material-ui/core/styles";
import styles from "./AppStyles";

function App(props) {
  const { classes } = props;
  return (
    <div className={classes.container}>
      <div className={classes.navbar}>
        <Navbar />
      </div>
      <main className={classes.main}>
        <WeatherCard />
      </main>
      <footer className={classes.footer}>
        <Footer />
      </footer>
    </div>
  );
}
export default withStyles(styles)(App);
