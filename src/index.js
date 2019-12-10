import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";

import "./index.css";
import App from "./Components/App.js";
import reducers from "./reducers/reducers";

const store = createStore(
  reducers, //All of the reducers
  {}, //Initial state
  applyMiddleware(reduxThunk)
);

ReactDOM.render(
  <Provider store={store}>
    <App />{" "}
  </Provider>,
  document.getElementById("root")
);
