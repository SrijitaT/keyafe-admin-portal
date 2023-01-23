import React from "react";
import { Link } from "react-router-dom";
import { FaShapes } from "react-icons/fa";
import "./dashboard-menu.styles.scss";

const DashboardMenu = ({ active }) => {
  return (
    <div className="dashboard-menu">
      <ul className="dashboard-menu-item nav flex-column nav-pills me-3">
        <li className="nav-link">
          <Link to="/dashboard/shape" className="dashboard-menu-item-list">
            <FaShapes className="dashboard-icons" />{" "}
            <p
              className={
                active === "shape" ? "menu-list menu-active" : "menu-list"
              }
            >
              Shapes
            </p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default DashboardMenu;
