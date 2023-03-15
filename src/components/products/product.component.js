import React, { useState, useEffect } from "react";
import { Row, Col, Table } from "react-bootstrap";

import { Icon } from "@iconify/react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import axiosInterceptor from "../../utils/api/axiosInterceptor";
import ProductsTable from "./products-table.component";

const Product = () => {
  const [categoryName, setCategoryName] = useState("");
  const [products, setProducts] = useState([]);

  const categoryList = [
    "Cookies",
    "Celebration cakes",
    "Dry cake",
    "Savoury items(Snacks)",
    "Pizza and Breads",
  ];

  const handleChange = (e) => {
    setCategoryName(e.target.value);
  };

  const getProductList = async () => {
    const { data: productList } = await axiosInterceptor.get(
      `/products/${categoryName}?page=1`
    );
    console.log("fetching product data", productList?.data?.records);
    if (productList?.data?.records) {
      setProducts([...productList?.data?.records]);
    }
  };

  useEffect(() => {
    console.log("selected category", categoryName);

    getProductList();
  }, [categoryName]);

  console.log("Product array", Array.isArray(products) ? products : []);

  return (
    <div>
      <Row style={{ marginBottom: "15px" }}>
        <Col lg={6}>
          <Form.Select
            className="product-form"
            name="category_name"
            onChange={handleChange}
          >
            {/* <option value="default">Select a category</option> */}
            {/* <option>Select Product category</option> */}
            {categoryList.map((item) => (
              <option value={item}> {item} </option>
            ))}
          </Form.Select>
        </Col>
        <Col lg={6}></Col>
      </Row>
      <Row>
        <ProductsTable products={products} />
      </Row>
    </div>
  );
};

export default Product;
