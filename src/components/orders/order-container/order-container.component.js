import React, { useState, useEffect } from "react";
import { Row, Col, Card } from "react-bootstrap";
import "./order-container.styles.scss";
import "rsuite/dist/rsuite.min.css";
import CustomCard from "../../custom-cards";
import SortableTable from "../sortable-mock-data";

const OrderContainer = () => {
  const tableData = [
    { column1: "Value 10", column2: "Value 20", column3: "Value 30" },
    { column1: "Value 11", column2: "Value 21", column3: "Value 31" },
    { column1: "Value 12", column2: "Value 22", column3: "Value 32" },
    { column1: "Value 13", column2: "Value 23", column3: "Value 33" },
    { column1: "Value 14", column2: "Value 24", column3: "Value 34" },
    { column1: "Value 15", column2: "Value 25", column3: "Value 35" },
    { column1: "Value 16", column2: "Value 26", column3: "Value 36" },
    { column1: "Value 17", column2: "Value 27", column3: "Value 37" },
    { column1: "Value 18", column2: "Value 28", column3: "Value 38" },
    { column1: "Value 19", column2: "Value 29", column3: "Value 39" },
    // Add more data rows
  ];
  return (
    <div className="order-container-wrapper">
      <div className="order-container-header-cards">
        <CustomCard headerInfo="Total Orders" info="13" />
        <CustomCard headerInfo="Succesfull Delivery" info="9" />
        <CustomCard headerInfo="Orders Rejected" info="4" />
      </div>
      <div className="order-table">
        <SortableTable data={tableData} />
      </div>
    </div>
  );
};

export default OrderContainer;
