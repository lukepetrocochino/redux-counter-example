// Combine all reducers in to index.js to create an "allReducers" constant which gets passed to the main index.js

import counterReducer from "./counter";
import loggedReducer from "./isLogged";

import { combineReducers } from "redux";

const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
});

export default allReducers;
