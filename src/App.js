// Mark Allen - web developer - Home page
// M. Allen - 2019

import React, { Component } from "react";
import "./App.css";
import NavBar from "./NavBar";
import HomePage from "./HomePage";
import About from "./About";
import Contact from "./Contact";
import Reviews from "./Reviews";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <HomePage />
        <About />
        <Contact />
        <Reviews />
        <Footer />
      </div>
    );
  }
}

export default App;
