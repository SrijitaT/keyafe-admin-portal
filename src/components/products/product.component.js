import React, { useState, useEffect } from "react";
import { Row, Col, Table } from "react-bootstrap";
import useFetchData from "../../custom-hooks/useFetchData";
import { Icon } from "@iconify/react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import axiosInterceptor from "../../utils/api/axiosInterceptor";

const Product = () => {
  const [categoryName, setCategoryName] = useState("");

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

  //   const { data, loading } = useFetchData(`/products/${categoryName}?page=1`);

  //   console.log("list of available products for this category", data);

  const getProductList = async () => {
    const { data: productList } = await axiosInterceptor.get(
      `/products/${categoryName}?page=1`
    );
    console.log("fetching product data", productList);
  };

  useEffect(() => {
    console.log("selected category", categoryName);
    getProductList();
  }, [categoryName]);

  return (
    <div>
      <Form.Select
        className="product-form"
        name="category_name"
        onChange={handleChange}
      >
        {/* <option>Select Product category</option> */}
        {categoryList.map((item) => (
          <option value={item}> {item} </option>
        ))}
      </Form.Select>
    </div>
  );
};

export default Product;
