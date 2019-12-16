import React, { Component } from "react";
import { Link } from "gatsby";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Helmet } from "react-helmet";
import logo from "../assets/images/logo-black.png";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stripe: null,
      showTopNav: true,
      showCategories: false
    };
    this.categories = props.categories;
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Inka</title>
          <meta
            name="description"
            content="Hourly gives you access to top flight consultants with a proven track record in startup consulting, tech, investment and recruiting and we do it by the hour. "
          />
          <link rel="canonical" href="https://hourly.consulting" />
        </Helmet>
        {this.state.showTopNav ? (
          <Navbar
            expand="lg"
            bg="light"
            style={{
              borderTop: "8px solid #eeeeee",
              padding: "0px"
            }}
          >
            <Container>
              <div />

              <div
                style={{
                  paddingTop: "8px",
                  paddingBottom: "16px",
                  paddingLeft: "24px",
                  paddingRight: "24px",
                  background: "#eee",
                  color: "#f43861"
                }}
              >
                <span>Register &nbsp; &nbsp; &nbsp; </span>
                <span>Login</span>
              </div>
            </Container>
          </Navbar>
        ) : (
          <span />
        )}

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
      </div>
    );
  }
}
export default Header;
