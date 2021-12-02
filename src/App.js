import React from "react";
import {
  Footer,
  Blog,
  Features,
  Header,
  Possibility,
  WhatGPT3,
} from "./containers";
import { Brand, CTA, Navbar } from "./components";
import "./App.css";

const App = () => {
  return (
    <div classNmae="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
        <div>
          <Brand />
          <WhatGPT3 />
          <Features />
          <Possibility />
          <CTA />
          <Blog />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
