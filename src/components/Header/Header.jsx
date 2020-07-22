import React from "react";
import classes from "./Header.module.scss";
import { FaBars } from "react-icons/fa";

export const Header = ({ showSidebarHandler }) => {
  return (
    <header className={classes.header}>
      <FaBars className={classes.icon} onClick={showSidebarHandler} />
      <h1>COVID-19 TRACKER</h1>
    </header>
  );
};
