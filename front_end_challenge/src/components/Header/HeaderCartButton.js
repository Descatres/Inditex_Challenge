//import { useContext, useEffect, useState } from 'react';

import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{props.carCounter}</span>
    </button>
  );
};

export default HeaderCartButton;
