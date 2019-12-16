import React from "react";
import { Link } from "gatsby";
import Col from "react-bootstrap/Col";
import logo from "../assets/images/logo-black.png";

const Footer = props => {
  return (
    <>
      <footer className="section">
        <Col>
          <h6>&copy; 2019 - Indie Ridge. All rights reserved.</h6>
          <br />
          <Link to="/">
            <img alt="Hourly Logo" className="logo" src={logo} />
          </Link>
        </Col>
      </footer>
    </>
  );
};
export default Footer;
