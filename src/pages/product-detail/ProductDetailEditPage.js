import React from "react";
import { Row, Col } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import SideNavBar from "../../components/sidenav/sidenav.component";
import EditProductDetail from "../../components/edit-product-detail/edit-product-detail.component";
import "./product-detail-edit.styles.scss";

const ProductDetailEditPage = () => {
  const location = useLocation();
  const productInfo = location.state.product;
  const otherDetails = location.state.otherProductDetails;

  console.log("inside product detail edit page", productInfo);
  console.log("inside product detail edit page other details", otherDetails);

  return (
    <Row className="product-edit-page-wrapper">
      <Col lg={2}>
        <SideNavBar />
      </Col>
      <Col lg={10}>
        <div className="product-edit-container">
          <span>This is product details edit page</span>
          <EditProductDetail
            productInfo={productInfo}
            otherDetails={otherDetails}
          />
        </div>
      </Col>
    </Row>
  );
};

export default ProductDetailEditPage;
