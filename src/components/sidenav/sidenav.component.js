import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Sidenav, Nav } from "rsuite";
import "./sidenav.styles.scss";
import "rsuite/dist/rsuite.min.css"; // or

const SideNavBar = ({ expanded, setExpanded }) => {
  // const [expanded, setExpanded] = useState(true);
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
              <Link to="/dashboard">DashBoard</Link>
            </Nav.Item>
            <Nav.Item eventKey="2">
              <Link to="/shape">Shape</Link>
            </Nav.Item>
            <Nav.Item eventKey="3">
              <Link to="/flavour">Flavour</Link>
            </Nav.Item>
          </Nav>
        </Sidenav.Body>
        <Sidenav.Toggle onToggle={(expanded) => setExpanded(expanded)} />
      </Sidenav>
    </div>
  );
};

export default SideNavBar;
