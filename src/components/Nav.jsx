import React, { Component } from "react";
import { Link } from "gatsby";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const TopNav = () => {
    return (
        <Navbar
        expand="lg"
        bg="light"
        style={{ paddingTop: "20px", paddingBottom: "20px" }}
      >
        <Container>
          <Link to="/">
            <img alt="Hourly Logo" className="logo" src={logo} />
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Link
              to="/consultants/"
              className="btn btn--sm  type--uppercase nav_button_2 nav-link"
            >
              <span className="">Sign Up</span>
            </Link>
            <Nav.Link
              href="https://indieridge.com"
              className="btn btn--sm btn--primary type--uppercase nav_button_2"
            >
              <span className="">Blog</span>
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default TopNav;