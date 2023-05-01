import React, { useState, useEffect } from "react";
import { Row, Col, Table, Form } from "react-bootstrap";

import axiosInterceptor from "../../utils/api/axiosInterceptor";
import ProductsTable from "./products-table.component";
import { getProductCategory } from "../../redux/products/product.action";
import { useDispatch, useSelector } from "react-redux";

const Product = () => {
  const [categoryName, setCategoryName] = useState("");
  const [products, setProducts] = useState([]);

  const categoryList = useSelector((state) => state.product.categoryList);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("getting category list...");
    dispatch(getProductCategory());
  }, []);

  // const categoryList = [
  //   "Cookies",
  //   "Celebration cakes",
  //   "Dry cake",
  //   "Savoury items(Snacks)",
  //   "Pizza and Breads",
  // ];

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
  console.log("category list", categoryList);

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
            {categoryList &&
              Array.isArray(categoryList) &&
              categoryList.map((item) => (
                <option key={item.id} value={item}>
                  {" "}
                  {item.name}{" "}
                </option>
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
