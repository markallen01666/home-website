// junkbox - repository for odd and ends during development

import { Navbar, Nav } from "react-bootstrap";

<div>
<Navbar bg="dark" variant="dark" sticky="top">
  <Navbar.Brand href="/">Mark Allen - Web Developer</Navbar.Brand>
    <Nav className="justify-content-end">
      <Nav.Item>
        <Nav.Link href="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/services">Services</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/about">About</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/contact">Contact</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/reviews">Reviews</Nav.Link>
      </Nav.Item>
    </Nav>
</Navbar>
</div>

// ==========================================================

<nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
  <div class="container">
    <a class="navbar-brand" href="/">booksBlog</a>
    <button
      class="navbar-toggler navbar-toggler-right"
      type="button"
      data-toggle="collapse"
      data-target="#navbarResponsive"
      aria-controls="navbarResponsive"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      Menu
      <i class="fas fa-bars"></i>
    </button>
    <div class="collapse navbar-collapse" id="navbarResponsive">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/search">Search</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/contact">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

// =============================================================

<h3 className="nav justify-content-start">Mark Allen</h3>
<ul className="nav justify-content-end">
  <li className="nav-item">
    <a className="nav-link" href="/">Home</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/services">Services</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/about">About</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/contact">Contact</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/reviews">Reviews</a>
  </li>
</ul>