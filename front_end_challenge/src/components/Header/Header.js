import { Fragment } from "react";
import { Link } from "react-router-dom";

import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>
          <Link to="/item_list">ReactMobile</Link>
        </h1>
        <HeaderCartButton carCounter={props.carCounter}/>
      </header>
    </Fragment>
  );
};

export default Header;
