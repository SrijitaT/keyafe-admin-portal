import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DashboardIcon from "@rsuite/icons/legacy/Dashboard";
import ShapeIcon from "@rsuite/icons/legacy/Shapes";
import FlavourIcon from "@rsuite/icons/legacy/Flow";
import ProductIcon from "@rsuite/icons/legacy/ProductHunt";
import { Icon } from "@rsuite/icons";
import { BiFoodMenu } from "react-icons/bi";
import { Sidenav, Nav } from "rsuite";
import "./sidenav.styles.scss";
import "rsuite/dist/rsuite.min.css"; // or

const SideNavBar = () => {
  const [expanded, setExpanded] = useState(true);
  const [menuSelected, setMenuSelected] = useState("");
  console.log("sidenav state", expanded);

  useEffect(() => {
    console.log("menu selected", menuSelected);
  }, [menuSelected]);

  return (
    <div>
      <Sidenav
        expanded={expanded}
        // appearance="inverse"
        className="sidebar-main-wrapper"
      >
        <Sidenav.Body className="sidenav-body">
          <Nav className="sidenav-items">
            <Nav.Item
              eventKey="1"
              className={
                menuSelected == "dashboard"
                  ? "sidenav-active-item"
                  : "sidenav-item"
              }
              icon={<DashboardIcon />}
            >
              <Link
                to="/dashboard"
                onClick={() => setMenuSelected("dashboard")}
              >
                DashBoard
              </Link>
            </Nav.Item>
            {/* <hr /> */}
            <Nav.Item
              eventKey="2"
              className={
                menuSelected == "shape" ? "sidenav-active-item" : "sidenav-item"
              }
              icon={<ShapeIcon />}
            >
              <Link to="/shape" onClick={() => setMenuSelected("shape")}>
                Shape
              </Link>
            </Nav.Item>
            {/* <hr /> */}
            <Nav.Item
              eventKey="3"
              className={
                menuSelected == "flavour"
                  ? "sidenav-active-item"
                  : "sidenav-item"
              }
              icon={<FlavourIcon />}
            >
              <Link to="/flavour" onClick={() => setMenuSelected("flavour")}>
                Flavour
              </Link>
            </Nav.Item>
            <Nav.Item
              eventKey="4"
              className={
                menuSelected == "product"
                  ? "sidenav-active-item"
                  : "sidenav-item"
              }
              icon={<ProductIcon />}
            >
              <Link to="/product" onClick={() => setMenuSelected("product")}>
                Product
              </Link>
            </Nav.Item>
            <Nav.Item
              eventKey="5"
              className={
                menuSelected == "orders-all"
                  ? "sidenav-active-item"
                  : "sidenav-item"
              }
              icon={<Icon as={BiFoodMenu} />}
            >
              <Link
                to="/orders-all"
                onClick={() => setMenuSelected("orders-all")}
              >
                Orders
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
