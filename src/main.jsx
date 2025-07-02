import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { CssBaseline } from "@mui/material";
import { Provider } from "react-redux";
import store from "./redux/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
        <CssBaseline />
        <div onContextMenu={(e) => e.preventDefault()}>
          <App />
        </div>   
    </Provider>
  </React.StrictMode>
);