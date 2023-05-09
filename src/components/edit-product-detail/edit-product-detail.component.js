import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { Icon } from "@iconify/react";
import CategoryListing from "../category-listing";
import { useDispatch, useSelector } from "react-redux";
// import { getAvailableType } from "../../redux/products/product.action";
import TypeListing from "../type-listing";
import FlavourListing from "../flavour-listing";

const EditProductDetail = ({ productInfo, otherDetails }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  //   const typeListing = useSelector((state) => state.product.typeList);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleChange = (e) => {
    e.preventDefault();
  };

  console.log("image file", selectedFile);

  return (
    <>
      <Row>
        <h3>
          {productInfo.Category.name} - {productInfo.title}
        </h3>
      </Row>
      <Row>
        <Col lg={3}>Image File - </Col>
        <Col lg={4}>
          <input
            type="file"
            placeholder="upload in jpg or png"
            accept=".jpg,.png"
            onChange={handleFileChange}
            className="image-upload-section"
          />
        </Col>
        <Col lg={5}>
          {selectedFile ? (
            <Icon icon="icon-park-solid:success" color="green" />
          ) : null}
        </Col>
      </Row>
      <br />
      <Row>
        <Col lg={3}>Category:</Col>
        <Col lg={5}>
          <CategoryListing handleChange={handleChange} />
        </Col>
        <Col lg={4}></Col>
      </Row>
      <br />
      <Row>
        <Col lg={3}>Type:</Col>
        <Col lg={5}>
          <TypeListing
            handleChange={handleChange}
            cat_id={otherDetails.cat_id}
          />
        </Col>
        <Col lg={4}></Col>
      </Row>
      <br />
      <Row>
        <Col lg={3}>Flavour:</Col>
        <Col lg={5}>
          <FlavourListing handleChange={handleChange} />
        </Col>
        <Col lg={4}></Col>
      </Row>
    </>
  );
};

export default EditProductDetail;
