import React, { useState } from "react";
import { Table } from "react-bootstrap";

const SortableTable = ({ data }) => {
  const [orderData, setOrderData] = useState(data);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });

  const handleSort = (key, customSort) => {
    let direction = "asc";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "asc"
    ) {
      direction = "desc";
    }
    setOrderData(
      [...data].sort((a, b) => {
        if (customSort) {
          return customSort(a[key], b[key], direction);
        }
        return defaultSort(a[key], b[key], direction);
      })
    );
    setSortConfig({ key, direction });
  };

  const defaultSort = (a, b, direction) => {
    if (a < b) return direction === "asc" ? -1 : 1;
    if (a > b) return direction === "asc" ? 1 : -1;
    return 0;
  };

  const dateSort = (a, b, direction) => {
    const dateA = new Date(a);
    const dateB = new Date(b);
    if (dateA < dateB) return direction === "asc" ? -1 : 1;
    if (dateA > dateB) return direction === "asc" ? 1 : -1;
    return 0;
  };

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Order ID</th>
            <th onClick={() => handleSort("date", dateSort)}>Order Date</th>
            <th onClick={() => handleSort("price")}>Order Price(in Rs)</th>
            <th>Delivery Address</th>
            <th onClick={() => handleSort("date", dateSort)}>Delivery Date</th>
            <th>Delivery Type</th>
          </tr>
        </thead>
      </Table>
    </>
  );
};

export default SortableTable;
