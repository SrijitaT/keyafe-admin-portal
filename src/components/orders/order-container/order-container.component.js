import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./order-container.styles.scss";
import "rsuite/dist/rsuite.min.css";
import CustomCard from "../../custom-cards";
import SortableTable from "../sortable-data";

const OrderContainer = () => {
  const orderData = useSelector((state) => state.order);
  console.log("in order container", orderData);

  return (
    <div className="order-container-wrapper">
      <div className="order-container-header-cards">
        <CustomCard headerInfo="Total Orders" info={orderData?.orders.length} />
        <CustomCard headerInfo="Succesfull Delivery" info="9" />
        <CustomCard headerInfo="Orders Rejected" info="4" />
      </div>
      <div className="order-table">
        <SortableTable data={orderData?.orders} />
      </div>
    </div>
  );
};

export default OrderContainer;
