import React from "react";
import { Row, Col } from "react-bootstrap";
import SideNavBar from "../../components/sidenav/sidenav.component";

const ProductDetailEditPage = () => {
  return (
    <Row>
      <Col lg={2}>
        <SideNavBar />
      </Col>
      <Col lg={10}></Col>
    </Row>
  );
};

export default ProductDetailEditPage;
