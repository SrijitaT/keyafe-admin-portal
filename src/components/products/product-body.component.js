import React from "react";

const ProductBody = ({ product }) => {
  const {
    id,
    cat_id,
    img_url,
    original_flavour_id,
    shape_id,
    title,
    type_id,
    prod_det_id,
  } = product;
  return (
    <tr>
      <td> {id} </td>
      <td>
        {" "}
        <img
          src={img_url}
          alt="product image"
          style={{ width: "50px", height: "50px" }}
        />{" "}
      </td>
      <td> {title} </td>
      <td> {cat_id} </td>
      <td> {type_id} </td>
      <td> {prod_det_id} </td>
      <td> {shape_id ? shape_id : "N/A"} </td>
      <td> {original_flavour_id ? original_flavour_id : "N/A"} </td>
    </tr>
  );
};

export default ProductBody;
