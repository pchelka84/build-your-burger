import React from "react";

import classes from "./burgerIngredient.className";

const burgerIngredient = props => {
  let ingredient = null;

  switch (props.type) {
    case "bread-bottom":
      ingredient = <div className={classes.breadBottom} />;
      break;
    case "bread-top":
      ingredient = (
        <div className={classes.BreadTop}>
          <div classname={classes.Seeds1} />
          <div className={classes.Seeds2} />
        </div>
      );
      break;
    case "meat":
      ingredient = <div className={classes.Meat} />;
      break;
    case "cheese":
      ingredient = <div calssname={classes.Cheese} />;
      break;
    case "salad":
      ingredient = <div calssname={classes.Salad} />;
      break;
    case "bacon":
      ingredient = <div calssname={classes.Bacon} />;
      break;
    default:
      null;
  }
  return ingredient;
};

export default burgerIngredient;
