import React, { useState, useEffect } from "react";
import { Row, Col, Table, Form } from "react-bootstrap";

import axiosInterceptor from "../../utils/api/axiosInterceptor";
import ProductsTable from "./products-table.component";
import { getProductCategory } from "../../redux/products/product.action";
import { useDispatch, useSelector } from "react-redux";
import CategoryListing from "../category-listing";

const Product = () => {
  const [categoryName, setCategoryName] = useState("");
  const [products, setProducts] = useState([]);

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

  console.log(
    "Product array",
    Array.isArray(products) && products.length > 0 ? products : []
  );
  // console.log("category list", categoryList);

  return (
    <div>
      <Row style={{ marginBottom: "15px" }}>
        <Col lg={6}>
          <CategoryListing handleChange={handleChange} />
        </Col>
        <Col lg={6}></Col>
      </Row>
      <Row>
        {categoryName.length > 0 && <ProductsTable products={products} />}
      </Row>
    </div>
  );
};

export default Product;
