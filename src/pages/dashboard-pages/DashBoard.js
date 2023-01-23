import React from "react";
import { Row, Col } from "react-bootstrap";
// import { Link } from "react-router-dom";
import AdminDashboard from "../../components/admin-dashboard/admin-dashboard.component";
import ShapePage from "../../pages/dashboard-pages/shape-page/ShapePage";
import DashboardMenu from "./dashboard-menu/DashboardMenu";

const DashBoard = () => {
  // const { pages } = props.match.params;
  return (
    <div>
      {/* <Link to="/admin-dashboard">
        <AdminDashboard />
      </Link> */}
      <Row>
        <Col lg={3}>
          <DashboardMenu />
        </Col>
        <Col lg={9}>
          <ShapePage />
        </Col>
      </Row>
    </div>
  );
};

export default DashBoard;
