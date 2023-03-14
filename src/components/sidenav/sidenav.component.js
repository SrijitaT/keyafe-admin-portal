import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Sidenav, Nav } from "rsuite";
import "./sidenav.styles.scss";
import "rsuite/dist/rsuite.min.css"; // or

const SideNavBar = () => {
  const [expanded, setExpanded] = useState(true);
  console.log("sidenav state", expanded);
  return (
    <div>
      <Sidenav
        expanded={expanded}
        // appearance="inverse"
        className="sidebar-main-wrapper"
      >
        <Sidenav.Body>
          <Nav activeKey="1">
            <Nav.Item eventKey="1">
              <Link
                to="/dashboard"
                style={{ color: "#000", textDecoration: "none" }}
              >
                DashBoard
              </Link>
            </Nav.Item>
            {/* <hr /> */}
            <Nav.Item eventKey="2">
              <Link
                to="/shape"
                style={{ color: "#000", textDecoration: "none" }}
              >
                Shape
              </Link>
            </Nav.Item>
            {/* <hr /> */}
            <Nav.Item eventKey="3">
              <Link
                to="/flavour"
                style={{ color: "#000", textDecoration: "none" }}
              >
                Flavour
              </Link>
            </Nav.Item>
            {/* <hr /> */}
          </Nav>
        </Sidenav.Body>
        <Sidenav.Toggle onToggle={(expanded) => setExpanded(expanded)} />
      </Sidenav>
    </div>
  );
};

export default SideNavBar;
