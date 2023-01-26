import React, { useState, useEffect } from "react";
import "./header.styles.scss";
import { Link, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar, NavbarBrand } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

export default function Header() {
  const currentUser = useSelector((state) => state.user.currentUser);
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
        <Link to={currentUser ? "/dashboard" : "/"}>
          <img className="logo" src="/images/logo/keyafe.png" alt="logo" />
        </Link>
      </NavbarBrand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="ms-auto nav-menu">
          {currentUser && (
            <NavLink className="option">
              {/* <Link  to="/signin"> */}
              Hi{" "}
              {currentUser.name.charAt(0).toUpperCase() +
                currentUser.name.slice(1)}
              !{/* </Link> */}
            </NavLink>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
