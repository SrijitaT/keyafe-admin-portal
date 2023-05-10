import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAvailableFlavour } from "../../redux/products/product.action";
import { Form } from "react-bootstrap";
import { Icon } from "@iconify/react";

const FlavourListing = ({ flavour_name, handleChange }) => {
  const flavourListing = useSelector((state) => state.product.flavourList);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAvailableFlavour());
  }, []);

  return (
    <Form.Select
      className="flavour-form"
      name="flavour_id"
      onChange={handleChange}
    >
      {flavour_name ? (
        <option>{flavour_name}</option>
      ) : (
        <option>Select flavour</option>
      )}
      {flavourListing && Array.isArray(flavourListing) ? (
        flavourListing.map((item) => (
          <option key={item.id} value={item.variety}>
            {" "}
            {item.variety}{" "}
          </option>
        ))
      ) : (
        <Icon icon="eos-icons:three-dots-loading" />
      )}
    </Form.Select>
  );
};

export default FlavourListing;
