import React, { useState } from "react";
import { Table } from "react-bootstrap";
import OrderItems from "../order-items-body";

const SortableTable = ({ data: OrderItem }) => {
  const [orderData, setOrderData] = useState(OrderItem);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });

  const handleSort = (key, customSort) => {
    let direction = "asc";

    if (sortConfig && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setOrderData(
      [...OrderItem].sort((a, b) => {
        if (customSort) {
          return customSort(a[key], b[key], direction);
        }
        return defaultSort(a[key], b[key], direction);
      })
    );
    setSortConfig({ key, direction });
  };

  const defaultSort = (a, b, direction) => {
    if (typeof a === "string" && typeof b === "string") {
      return direction === "asc" ? a.localeCompare(b) : b.localeCompare(a);
    } else {
      return direction === "asc" ? a - b : b - a;
    }
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
            <th onClick={() => handleSort("createdAt", dateSort)}>
              Order Date
            </th>
            <th onClick={() => handleSort("total_amount_payable")}>
              Order Price(in Rs)
            </th>
            <th>Delivery Address</th>
            <th onClick={() => handleSort("delivery_date", dateSort)}>
              Delivery Date
            </th>
            <th>Delivery Type</th>
          </tr>
        </thead>
        <tbody>
          {OrderItem.map((item) => {
            const { uid } = item;
            return <OrderItems item={item} key={uid} />;
          })}
        </tbody>
      </Table>
    </>
  );
};

export default SortableTable;
