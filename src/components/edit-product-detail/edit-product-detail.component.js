import React, { useState, useEffect } from "react";
import { Row, Col, Table } from "react-bootstrap";
import { Icon } from "@iconify/react";
import CategoryListing from "../category-listing";
import { useDispatch, useSelector } from "react-redux";
import { getAvailableFlavour } from "../../redux/products/product.action";
import TypeListing from "../type-listing";
import FlavourListing from "../flavour-listing";
import Button from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import ProductPriceWeightMapTable from "../productpriceWeightmap";

const EditProductDetail = ({ productInfo, otherDetails }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const flavourList = useSelector((state) => state.product.flavourList);
  const dispatch = useDispatch();

  useEffect(() => {
    if (flavourList.length === 0) {
      dispatch(getAvailableFlavour());
    }
  }, []);

  productInfo = Object.keys(productInfo).length === 0 ? {} : productInfo;
  otherDetails = Object.keys(otherDetails).length === 0 ? {} : otherDetails;

  console.log("in edit product detail page", productInfo);
  console.log("in edit product detail page", otherDetails);
  //   const typeListing = useSelector((state) => state.product.typeList);

  const [productPriceMapData, setProductPriceMapData] = useState(
    productInfo.ProductDetail.priceWeightMap
      ? productInfo.ProductDetail.priceWeightMap
      : {}
  );

  const [editProductPatchBody, setEditProductPatchBody] = useState({
    prod_id: "",
    file: "",
    title: "",
    cat_id: "",
    type_id: "",
    prod_det_id: otherDetails.prod_det_id,
    shape_id: "",
    original_flavour_id: "",
    unit_price: "",
  });

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setEditProductPatchBody((prev) => {
      return {
        ...prev,
        file: selectedFile,
      };
    });
  };

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    if (name === "cat_id") {
      setEditProductPatchBody((prev) => {
        return {
          ...prev,
          cat_id: otherDetails.cat_id,
        };
      });
    } else if (name === "type_id") {
      setEditProductPatchBody((prev) => {
        return {
          ...prev,
          type_id: otherDetails.type_id ? otherDetails.type_id : null,
        };
      });
    } else if (name === "flavour_id") {
      const flavourID = flavourList.find(
        (flavour) => flavour.variety === value
      );
      setEditProductPatchBody((prev) => {
        return {
          ...prev,
          original_flavour_id: flavourID ? flavourID.id : null,
        };
      });
    } else if (name === "shape_id") {
      setEditProductPatchBody((prev) => {
        return {
          ...prev,
          shape_id: otherDetails.shape_id ? otherDetails.shape_id : null,
        };
      });
    } else {
      setEditProductPatchBody((prev) => {
        return {
          ...prev,
          [name]: value,
        };
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  console.log("image file", selectedFile);

  console.log("in edit product detail page", productInfo);
  console.log("in edit product detail page", otherDetails);

  return (
    <>
      <Row>
        <h3>{productInfo.Category.name}</h3>
      </Row>
      <Row>
        <Col lg={3} className="d-flex align-items-center">
          Title
        </Col>
        <Col lg={4} className="d-flex align-items-center">
          <FormInput
            label="Title"
            type="text"
            required
            onChange={handleChange}
            name="title"
            value={productInfo.title}
          />
        </Col>
        <Col lg={5}></Col>
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
          <CategoryListing
            cat_name={productInfo.Category.name}
            handleChange={handleChange}
          />
        </Col>
        <Col lg={4}></Col>
      </Row>
      <br />
      <Row>
        <Col lg={3}>Type:</Col>
        <Col lg={5}>
          <TypeListing
            type_name={productInfo.Type.name}
            handleChange={handleChange}
            cat_id={otherDetails.cat_id}
          />
        </Col>
        <Col lg={4}></Col>
      </Row>
      <br />
      <Row>
        <Col lg={3}>Original Flavour:</Col>
        <Col lg={5}>
          <FlavourListing
            flavour_name={productInfo.Flavour.variety}
            handleChange={handleChange}
          />
        </Col>
        <Col lg={4}></Col>
      </Row>
      <br />
      <Row>
        <Col lg={3} className="d-flex align-items-center">
          Unit Price (in Rs):
        </Col>
        <Col lg={2} className="d-flex align-items-center">
          <FormInput
            label="Unit Price"
            type="number"
            required
            onChange={handleChange}
            name="unit_price"
            value={productInfo.unit_price}
          />
        </Col>
      </Row>
      <br />
      <Row>
        {productPriceMapData && (
          <>
            <h3>Other possible Weight & Price List</h3>
            <Table responsive hover bordered>
              <thead>
                <tr>
                  <th>Weight</th>
                  <th>Original Price(Rs)</th>
                  <th>Discounted Price(Rs)</th>
                  <th>Serves Around</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(productPriceMapData).map((key) => {
                  return (
                    <tr key={key}>
                      <td>{key}</td>
                      <td>{productPriceMapData[key].original_price}</td>
                      <td>{productPriceMapData[key].discounted_price}</td>
                      <td>{productPriceMapData[key].serves_around}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </>
        )}
      </Row>
      <Row>
        <Button onClick={handleSubmit}>Submit</Button>
      </Row>
    </>
  );
};

export default EditProductDetail;
