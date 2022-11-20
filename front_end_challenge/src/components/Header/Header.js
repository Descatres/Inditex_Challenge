import { Fragment } from "react";
import { Link, useParams } from "react-router-dom";

import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.css";

const Header = () => {
  let params = useParams();
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>
          <Link to="/item_list">ReactMobile</Link>
        </h1>
        <HeaderCartButton />
      </header>
    </Fragment>
  );
};

export default Header;
