import React, { createContext, useReducer } from "react";
import axios from "axios";
import { reducer } from "./reducer";
import * as actions from "./actions";

export const Context = createContext();

const initialState = {
  globalInfo: null,
  countries: null,
  country: null,

  showSpinner: false,
  error: null,
};

export const ContextComponent = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getGlobalInfo = async () => {
    dispatch({ type: actions.TOGGLE_SPINNER, value: true });
    try {
      const { data } = await axios.get("/all");
      dispatch({ type: actions.ADD_GLOBAL_INFO, data });
    } catch (error) {
      let errorMessage = error.message;
      if (error.response) errorMessage = error.response.data.message;
      dispatch({ type: actions.ADD_ERROR, error: errorMessage });
    }
    dispatch({ type: actions.TOGGLE_SPINNER, value: false });
  };

  const getCountries = async () => {
    dispatch({ type: actions.TOGGLE_SPINNER, value: true });
    try {
      const { data } = await axios.get("/countries");
      dispatch({ type: actions.ADD_COUNTRIES, data });
    } catch (error) {
      let errorMessage = error.message;
      if (error.response) errorMessage = error.response.data.message;
      dispatch({ type: actions.ADD_ERROR, error: errorMessage });
    }
    dispatch({ type: actions.TOGGLE_SPINNER, value: false });
  };

  const getCountry = async (country) => {
    dispatch({ type: actions.TOGGLE_SPINNER, value: true });
    try {
      const { data } = await axios.get(`/countries/${country}`);
      dispatch({ type: actions.ADD_COUNTRY, data });
    } catch (error) {
      let errorMessage = error.message;
      if (error.response) errorMessage = error.response.data.message;
      dispatch({ type: actions.ADD_ERROR, error: errorMessage });
    }
    dispatch({ type: actions.TOGGLE_SPINNER, value: false });
  };

  const removeCountry = () => {
    dispatch({ type: actions.REMOVE_COUNTRY });
  };

  const removeError = () => {
    dispatch({ type: actions.REMOVE_ERROR });
  };

  return (
    <Context.Provider
      value={{
        ...state,
        getGlobalInfo,
        getCountries,
        getCountry,
        removeCountry,
        removeError,
      }}
    >
      {children}
    </Context.Provider>
  );
};
