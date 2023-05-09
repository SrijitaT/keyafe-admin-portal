import React from "react";
import { Row, Col } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import SideNavBar from "../../components/sidenav/sidenav.component";
import "./product-detail-edit.styles.scss";

const ProductDetailEditPage = () => {
  const location = useLocation();
  const productInfo = location.state.product;

  console.log("inside product detail edit page", productInfo);

  return (
    <Row className="product-edit-page-wrapper">
      <Col lg={2}>
        <SideNavBar />
      </Col>
      <Col lg={10}>
        <div className="product-edit-container">
          <span>This is product details edit page</span>
        </div>
      </Col>
    </Row>
  );
};

export default ProductDetailEditPage;
