// React Navbar component
// M. Allen - 2019

import React, {Component} from 'react';

class NavBar extends Component {
  render() {
    return (
      <div className="App-navbar">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Reviews</li>
          <li>Contact</li>
        </ul>
      </div>
    );
  }
}

export default NavBar;