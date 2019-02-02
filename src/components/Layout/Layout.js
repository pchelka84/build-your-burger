import React from "react";

import Aux from "../../hoc/Auxiliaru";
import classes from "./Layout.css";
import Toolbar from "./../Navigation/Toolbar/Toolbar";

const layout = props => (
  <Aux>
    <Toolbar />
    <div>Toolbar, SideDrawe, Backdrop</div>
    <main className={classes.Content}>{props.children}</main>
  </Aux>
);

export default layout;
