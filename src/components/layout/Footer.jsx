import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "../styles/FooterStyles";

function Footer({ classes }) {
  return (
    <div className={classes.footer}>
      <div className={classes.container}>
        <p>My Weather App</p>
      </div>
    </div>
  );
}

export default withStyles(styles)(Footer);
