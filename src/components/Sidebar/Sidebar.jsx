import React from "react";
import classes from "./Sidebar.module.scss";
import { NavLink } from "react-router-dom";
import { FaHome, FaGlobe, FaSearch, FaTimes } from "react-icons/fa";

export const Sidebar = ({ showSidebar, hideSidebarHandler }) => {
  const classNames = [classes.sidebar, showSidebar ? classes.show : null];

  return (
    <div className={classNames.join(" ")}>
      <FaTimes className={classes.close} onClick={hideSidebarHandler} />

      <ul>
        <li>
          <NavLink activeClassName={classes.active} to="/" exact>
            <FaHome /> DASHBOARD
          </NavLink>
        </li>

        <li>
          <NavLink activeClassName={classes.active} to="/countries">
            <FaGlobe /> COUNTRIES
          </NavLink>
        </li>

        <li>
          <NavLink activeClassName={classes.active} to="/search">
            <FaSearch /> SEARCH
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
