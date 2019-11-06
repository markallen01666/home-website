// React Navbar component
// M. Allen - 2019

import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";


import HomePage from "./HomePage";
import Services from "./Services";
import About from "./About";
import Contact from "./Contact";
import Reviews from "./Reviews";

class NavBar extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#">react-bootstrap</a>
              </Navbar.Brand>
            </Navbar.Header>
            <Nav>
              <NavItem>
                <Link to="/">Home</Link>
              </NavItem>
              <NavItem>
                <Link to="/github">Github</Link>
              </NavItem>
            </Nav>
          </Navbar>
          <Switch>
            <Route path="/github" component={Reviews} />
            <Route exact path="/" component={HomePage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default NavBar;
