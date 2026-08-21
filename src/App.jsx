import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import "./App.css";

function App() {
  const path = window.location.pathname;

  if (path === "/about") {
    return <About />;
  }

  return <Home />;
}

export default App;