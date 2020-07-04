import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "../styles/NavbarStyles";

function Navbar({ classes }) {
  return (
    <nav className={classes.nav}>
      <div className={classes.container}>
        <h3 className={classes.h3}>Weather-App</h3>
      </div>
    </nav>
  );
}
export default withStyles(styles)(Navbar);
