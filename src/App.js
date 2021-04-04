import React from "react";
import { Navbar } from "./components/Navbar";
import "./App.css";
import { Showcase } from "./components/Showcase";

export const App = () => {
  return (
    <div>
      <Navbar />
      <div className="main">
        <Showcase />
      </div>
    </div>
  );
};
