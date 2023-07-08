import React from "react";
import ReactDOM from "react-dom/client";
import "./scss/app.scss";
import App from "./components/App";
import BrowserRouter from "react-router-dom/BrowserRouter";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <App />
  </BrowserRouter>
);
