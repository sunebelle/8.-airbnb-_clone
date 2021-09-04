import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { UseHotelProvider } from "./hooks/useHotelContext";
import { BrowserRouter as Router } from "react-router-dom";
// import ProgressBar from "@badrap/bar-of-progress";

// const progress = new ProgressBar({
//   size: 2,
//   color: "#EF4444",
//   className: "z-100",
//   delay: 100,
// });
// Router.events.on("routeChangeStart", progress.start);
// Router.events.on("routeChangeComplete", progress.finish);
// Router.events.on("routeChangeError", progress.finish);
ReactDOM.render(
  <Router>
    <UseHotelProvider>
      <App />
    </UseHotelProvider>
  </Router>,
  document.getElementById("root")
);
