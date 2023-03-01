import React from "react";
import Home from "./components/Home/Home";
import Project from "./components/Projects/Project";
import Service from "./components/Service/Service";
import "./App.css";
function App() {
  return (
    <>
      <div className="Header">
        <h1>
          <span className="sp">Hello</span> World
        </h1>
      </div>
      <Home />
      <Project />
      <Service />
    </>
  );
}

export default App;
