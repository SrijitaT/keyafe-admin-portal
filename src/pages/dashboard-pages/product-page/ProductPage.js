import React, { useState } from "react";
import SideNavBar from "../../../components/sidenav/sidenav.component";
import { Row, Col } from "react-bootstrap";
import "./product-page.styles.scss";
import Button from "../../../components/custom-button/custom-button.component";
import Product from "../../../components/products/product.component";

const ProductPage = () => {
  const [toggleProductForm, setToggleProductForm] = useState(false);
  return (
    <Row>
      <Col lg={2}>
        <SideNavBar />
      </Col>
      <Col lg={10}>
        <div className="product-page-wrapper">
          <Row className="product-head">
            <Col md={9} lg={8}>
              <h2>Insert Product Details</h2>
            </Col>
            <Col md={3} lg={4}>
              <Button onClick={() => setToggleProductForm(true)}>Add</Button>
            </Col>
          </Row>
          <Row>
            <Product />
          </Row>
        </div>
      </Col>
    </Row>
  );
};

export default ProductPage;
