import React from "react";
import { Link } from "gatsby";
import Col from "react-bootstrap/Col";
import logo from "../assets/images/inka-logo-black.png";
import Container from "react-bootstrap/Container";

const Footer = props => {
  return (
    <>
      <footer className="section" style={{padding:'50px 0px'}} >
      <Container>
        <Col>
          <h6>&copy; 2019 - inka. All rights reserved.</h6>
         
         
        </Col>
        <Col>
         
         
          <Link to="/">
            <img alt="Hourly Logo" className="logo" src={logo} style={{height:'45px'}} />
          </Link>
        </Col>
        </Container>
      </footer>
    </>
  );
};
export default Footer;
