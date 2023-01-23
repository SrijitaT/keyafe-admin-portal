import React from "react";
import ShapePage from "../../pages/dashboard-pages/shape-page/ShapePage";
import { Row, Col, Card } from "react-bootstrap";
import DashboardMenu from "../../pages/dashboard-pages/dashboard-menu/DashboardMenu";

const AdminDashboardPages = ({ pages }) => {
  switch (pages) {
    case "shape":
      return <ShapePage />;

    default:
      return <div>Page Not Found</div>;
  }
};

const AdminDashboard = ({ pages }) => {
  //   const { pages } = props.match.params;

  return (
    <Row>
      <Col lg={4}>
        <Card className="dashboard-card dashboard-menu">
          <DashboardMenu active={pages} />
        </Card>
      </Col>
      <Col lg={8} className="dashboard-inner">
        <AdminDashboardPages pages={pages} />
      </Col>
    </Row>
  );
};

export default AdminDashboard;
