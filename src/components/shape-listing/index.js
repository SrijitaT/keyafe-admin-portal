import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAvailableShapes } from "../../redux/products/product.action";
import { Form } from "react-bootstrap";
import { Icon } from "@iconify/react";

const ShapeListing = ({ handleChange }) => {
  const shapeListing = useSelector((state) => state.product.shapeList);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAvailableShapes());
  }, []);

  return (
    <Form.Select className="shape-form" name="shape_id" onChange={handleChange}>
      <option>Select shape</option>
      {shapeListing && Array.isArray(shapeListing) ? (
        shapeListing.map((item) => (
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

export default ShapeListing;
