import * as actions from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.TOGGLE_SPINNER:
      return {
        ...state,
        showSpinner: action.value,
      };

    case actions.ADD_GLOBAL_INFO:
      return {
        ...state,
        globalInfo: action.data,
      };

    case actions.ADD_COUNTRIES:
      return {
        ...state,
        countries: action.data,
      };

    case actions.ADD_COUNTRY:
      return {
        ...state,
        country: action.data,
      };

    case actions.REMOVE_COUNTRY:
      return {
        ...state,
        country: null,
      };

    case actions.ADD_ERROR:
      return {
        ...state,
        error: action.error,
      };

    case actions.REMOVE_ERROR:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
