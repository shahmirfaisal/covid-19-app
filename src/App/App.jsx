import React, { useState, useEffect } from "react";
import classes from "./App.module.scss";
import { Header } from "../components/Header/Header";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { Dashboard } from "../pages/Dashboard/Dashboard";
import { Route } from "react-router-dom";
import { Countries } from "../pages/Countries/Countries";
import { Country } from "../pages/Country/Country";
import { Search } from "../pages/Search/Search";
import { Backdrop } from "../styled-components/Backdrop";
import { useLocation } from "react-router-dom";

export const App = () => {
  const { pathname } = useLocation();
  const [showSidebar, setShowSidebar] = useState(false);

  const showSidebarHandler = () => setShowSidebar(true);
  const hideSidebarHandler = () => setShowSidebar(false);

  // Hide the Sidebar when we visit a new page
  useEffect(() => hideSidebarHandler(), [pathname]);

  return (
    <>
      <Header showSidebarHandler={showSidebarHandler} />

      <div className={classes.grid}>
        <div className={classes.sidebar}>
          <Sidebar
            showSidebar={showSidebar}
            hideSidebarHandler={hideSidebarHandler}
          />
        </div>

        {showSidebar ? <Backdrop onClick={hideSidebarHandler} /> : null}

        <main className={classes.content}>
          <Route path="/" exact component={Dashboard} />
          <Route path="/countries" exact component={Countries} />
          <Route path="/countries/:country" component={Country} />
          <Route path="/search" component={Search} />
        </main>
      </div>
    </>
  );
};
