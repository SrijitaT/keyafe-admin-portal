import React, { useState, useEffect } from "react";
import { Row, Col, Card } from "react-bootstrap";
import "./order-container.styles.scss";
import "rsuite/dist/rsuite.min.css";
import CustomCard from "../../custom-cards";

const OrderContainer = () => {
  return (
    <div>
      <div className="order-container-header-cards">
        <CustomCard headerInfo="Total Orders" info="13" />
        <CustomCard headerInfo="Succesfull Delivery" info="9" />
        <CustomCard headerInfo="Orders Rejected" info="4" />
      </div>
    </div>
  );
};

export default OrderContainer;
