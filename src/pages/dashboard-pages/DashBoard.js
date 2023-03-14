import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
// import { Link } from "react-router-dom";
import AdminDashboard from "../../components/admin-dashboard/admin-dashboard.component";
import Sidenav from "../../components/sidenav/sidenav.component";
import ShapePage from "../../pages/dashboard-pages/shape-page/ShapePage";
import DashboardMenu from "./dashboard-menu/DashboardMenu";

const DashBoard = () => {
  const [expanded, setExpanded] = useState(true);
  return (
    <div>
      <Row>
        <Col lg={expanded ? 3 : 1} style={{ marginBottom: "20px" }}>
          <Sidenav expanded={expanded} setExpanded={setExpanded} />
        </Col>
        <Col lg={expanded ? 9 : 11}>
          <h1>Welcome to Admin Portal</h1>
        </Col>
      </Row>
    </div>
  );
};

export default DashBoard;
