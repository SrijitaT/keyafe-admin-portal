import React, { useState } from "react";
import { Modal, Placeholder, Button } from "rsuite";

import "rsuite/dist/rsuite.min.css"; // or
import ProductDetails from "../product-detail";

const CustomModal = ({ open, handleClose, info }) => {
  console.log("info passed to modal", info);

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
          <Button onClick={handleClose} appearance="subtle">
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CustomModal;
