import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Sidenav, Nav } from "rsuite";

import "rsuite/dist/rsuite.min.css"; // or

const SideNavBar = () => {
  const [expanded, setExpanded] = useState(true);
  console.log("sidenav state", expanded);
  return (
    <div className="sidebar-main-wrapper">
      <Sidenav expanded={expanded} appearance="subtle">
        <Sidenav.Body>
          <Nav activeKey="1">
            <Nav.Item eventKey="1">DashBoard</Nav.Item>
            <Nav.Item eventKey="2">
              <Link to="/shape">Shape</Link>
            </Nav.Item>
            <Nav.Menu eventKey="3" title="Advanced">
              <Nav.Item eventKey="3-1">Geo</Nav.Item>
              <Nav.Item eventKey="3-2">Devices</Nav.Item>
              <Nav.Item eventKey="3-3">Loyalty</Nav.Item>
              <Nav.Item eventKey="3-4">Visit Depth</Nav.Item>
            </Nav.Menu>
            <Nav.Menu eventKey="4" title="Settings">
              <Nav.Item eventKey="4-1">Applications</Nav.Item>
              <Nav.Item eventKey="4-2">Channels</Nav.Item>
              <Nav.Item eventKey="4-3">Versions</Nav.Item>
              <Nav.Menu eventKey="4-5" title="Custom Action">
                <Nav.Item eventKey="4-5-1">Action Name</Nav.Item>
                <Nav.Item eventKey="4-5-2">Action Params</Nav.Item>
              </Nav.Menu>
            </Nav.Menu>
          </Nav>
        </Sidenav.Body>
        <Sidenav.Toggle onToggle={(expanded) => setExpanded(expanded)} />
      </Sidenav>
    </div>
  );
};

export default SideNavBar;
