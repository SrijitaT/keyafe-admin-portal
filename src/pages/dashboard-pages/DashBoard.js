import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Sidenav from "../../components/sidenav/sidenav.component";

const DashBoard = () => {
  return (
    <div>
      <Row>
        <Col lg={2} style={{ marginBottom: "20px" }}>
          <Sidenav />
        </Col>
        <Col lg={10}>
          <h1>Welcome to Admin Portal</h1>
        </Col>
      </Row>
    </div>
  );
};

export default DashBoard;
