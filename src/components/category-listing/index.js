import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductCategory } from "../../redux/products/product.action";
import { Form } from "react-bootstrap";
import { Icon } from "@iconify/react";

const CategoryListing = ({ cat_name, handleChange }) => {
  const categoryList = useSelector((state) => state.product.categoryList);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductCategory());
  }, []);

  return (
    <Form.Select className="product-form" name="cat_id" onChange={handleChange}>
      {cat_name ? (
        <option>{cat_name}</option>
      ) : (
        <option>Select Category</option>
      )}
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
