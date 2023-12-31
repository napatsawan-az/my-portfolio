import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css";

// init AOS animation
AOS.init({
  duration: 1500,
  offset: 100,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
