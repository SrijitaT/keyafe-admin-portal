import React, { useState } from "react";
import { Modal, Placeholder, Button } from "rsuite";
import { useNavigate } from "react-router-dom";

import "rsuite/dist/rsuite.min.css";
import ProductDetails from "../product-detail";

const CustomModal = ({ open, handleClose, info }) => {
  console.log("info passed to modal", info);

  const cat_name = (info && info.Category && info.Category.name) || "";
  const title = (info && info.title) || "";

  const navigate = useNavigate();

  const handleEditModal = (e) => {
    e.preventDefault();
    navigate(`/editproduct/${cat_name}/${title}`, {
      state: {
        product: info,
      },
    });
  };

  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <Modal.Header>
          <Modal.Title>Product Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {info ? (
            <ProductDetails productInfo={info} />
          ) : (
            <Placeholder.Paragraph />
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} appearance="primary">
            Ok
          </Button>
          <Button onClick={handleEditModal} appearance="subtle">
            Edit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CustomModal;
