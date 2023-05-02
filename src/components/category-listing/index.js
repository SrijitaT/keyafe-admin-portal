import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductCategory } from "../../redux/products/product.action";
import { Form } from "react-bootstrap";
import { Icon } from "@iconify/react";

const CategoryListing = ({ handleChange }) => {
  const categoryList = useSelector((state) => state.product.categoryList);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductCategory());
  }, []);

  return (
    <Form.Select
      className="product-form"
      name="category_name"
      onChange={handleChange}
    >
      <option>Select Category</option>
      {categoryList && Array.isArray(categoryList) ? (
        categoryList.map((item) => (
          <option key={item.id} value={item.name}>
            {" "}
            {item.name}{" "}
          </option>
        ))
      ) : (
        <Icon icon="eos-icons:three-dots-loading" />
      )}
    </Form.Select>
  );
};

export default CategoryListing;
