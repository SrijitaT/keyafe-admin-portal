import React, { useState, useEffect } from "react";
import "./header.styles.scss";
import { Link, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar, NavbarBrand } from "react-bootstrap";

export default function Header() {
  let listener = null;
  const [scrollState, setScrollState] = useState("header");

  useEffect(() => {
    listener = document.addEventListener("scroll", (e) => {
      var scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 60) {
        setScrollState("header active");
      } else {
        setScrollState("header");
      }
    });
    return () => {
      document.removeEventListener("scroll", listener);
    };
  }, []);

  return (
    <Navbar className={scrollState} expand="sm" variant="light" sticky="top">
      <NavbarBrand className="logo-container">
        <Link to="/">
          <img className="logo" src="/images/logo/keyafe.png" alt="logo" />
        </Link>
      </NavbarBrand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="ms-auto nav-menu">
          <NavLink className="option" to="signin">
            {/* <Link  to="/signin"> */}
            SIGN IN
            {/* </Link> */}
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
