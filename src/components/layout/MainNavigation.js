import React from "react";
import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom"; //NavLink acts as link in which style of css can be adeed

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Quote-Diary</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/quotes" activeClassName={classes.active}>
              All Quotes
            </NavLink>
          </li>
          <li>
            <NavLink to="/new-quote" activeClassName={classes.active}>
              Add Quotes
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
