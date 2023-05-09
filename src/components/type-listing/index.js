import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAvailableType } from "../../redux/products/product.action";
import { Form } from "react-bootstrap";
import { Icon } from "@iconify/react";

const TypeListing = ({ handleChange, cat_id }) => {
  const typeListing = useSelector((state) => state.product.typeList);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAvailableType(cat_id));
  }, []);

  return (
    <Form.Select className="type-form" name="type_name" onChange={handleChange}>
      <option>Select Type</option>
      {typeListing && Array.isArray(typeListing) ? (
        typeListing.map((item) => (
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

export default TypeListing;
