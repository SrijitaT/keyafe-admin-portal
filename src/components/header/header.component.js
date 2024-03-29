import React, { useState, useEffect } from "react";
import "./header.styles.scss";
import { Link, NavLink, redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar, NavbarBrand, Dropdown } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { signOutSuccess, setCurrentUser } from "../../redux/admin/admin.action";

export default function Header() {
  const currentUser = useSelector((state) => state.user.currentUser);
  let listener = null;
  const [scrollState, setScrollState] = useState("header");

  const dispatch = useDispatch();
  const signOutUser = () => {
    dispatch(signOutSuccess());
    return redirect("/");
  };

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

  // useEffect(() => {
  //   if (!currentUser) {
  //     dispatch(setCurrentUser(JSON.parse(localStorage.getItem("user"))));
  //   }
  // }, []);

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
          {currentUser ? (
            <Dropdown>
              <Dropdown.Toggle
                id="dropdown-basic"
                style={{
                  backgroundColor: "inherit",
                  border: "2px solid black",
                }}
              >
                <Link className="dropdown-option">
                  Hi{" "}
                  {currentUser.name.charAt(0).toUpperCase() +
                    currentUser.name.slice(1)}
                  !!
                </Link>
              </Dropdown.Toggle>
              <Dropdown.Menu
                style={{
                  fontWeight: "bold",
                  border: "2px solid",
                }}
              >
                <Dropdown.Item onClick={signOutUser}>
                  <NavLink className="dropdown-option">Log Out</NavLink>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          ) : null}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

// && (
//   <NavLink className="option">
//     {/* <Link  to="/signin"> */}
//     Hi{" "}
//     {currentUser.name.charAt(0).toUpperCase() +
//       currentUser.name.slice(1)}
//     !{/* </Link> */}
//   </NavLink>
// )
