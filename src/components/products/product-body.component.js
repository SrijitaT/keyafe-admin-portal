import React, { useState, useEffect } from "react";
import axiosInterceptor from "../../utils/api/axiosInterceptor";
import CustomModal from "../custom-modal";

const ProductBody = ({ product }) => {
  const {
    uid,
    // cat_id,
    img_url,
    unit_price,
    discounted_unit_price,
    // shape_id,
    title,
    // type_id,
    // prod_det_id,
  } = product;

  const [productInfo, setProductInfo] = useState([]);

  const getProductDetails = async (uid) => {
    const response = await axiosInterceptor.get(`product_details/${uid}`);
    console.log(response?.data?.data);

    if (
      response &&
      response.data.data &&
      Array.isArray(response.data.data) &&
      response.data.data.length > 0
    ) {
      setProductInfo(...response.data.data);
    }
  };

  useEffect(() => {
    getProductDetails(uid);
  }, [uid]);

  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const handleProductDetails = () => {
    handleOpenModal();
  };

  console.log(" product details", productInfo);

  return (
    <>
      {openModal ? (
        <CustomModal
          open={openModal}
          handleClose={handleCloseModal}
          info={productInfo}
        />
      ) : null}
      <tr onClick={handleProductDetails}>
        <td> {uid} </td>
        <td>
          {" "}
          <img
            src={img_url}
            alt="product image"
            style={{ width: "50px", height: "50px" }}
          />{" "}
        </td>
        <td> {title} </td>
        <td> {unit_price} </td>
        <td> {discounted_unit_price} </td>
        {/* <td> {prod_det_id} </td>
      <td> {shape_id ? shape_id : "N/A"} </td>
      <td> {original_flavour_id ? original_flavour_id : "N/A"} </td> */}
      </tr>
    </>
  );
};

export default ProductBody;
