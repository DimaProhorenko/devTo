import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./client.js";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store.js";
import Notifications from "./features/notifications/Notifications.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Notifications />
      <App />
    </Provider>
  </React.StrictMode>,
);
