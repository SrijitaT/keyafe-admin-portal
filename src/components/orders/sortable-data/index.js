import React, { useState } from "react";
import { Table, Row, Col } from "react-bootstrap";
import OrderItems from "../order-items-body";
import FormInput from "../../form-input/form-input.component";

const SortableTable = ({ data: OrderItem }) => {
  const [orderData, setOrderData] = useState(OrderItem);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleSort = (key, customSort) => {
    let direction = "asc";

    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }

    let sortedData = [...orderData];

    sortedData.sort((a, b) => {
      if (customSort) {
        return customSort(a[key], b[key], direction);
      }
      return defaultSort(a[key], b[key], direction);
    });

    setOrderData(sortedData);
    setSortConfig({ key, direction });
  };

  const defaultSort = (a, b, direction) => {
    if (typeof a === "string" && typeof b === "string") {
      a = parseFloat(a.replace(/[^0-9.-]+/g, ""));
      b = parseFloat(b.replace(/[^0-9.-]+/g, ""));
      return direction === "asc" ? a - b : b - a;
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

  const handleSearch = (event) => {
    const keyword = event.target.value.toLowerCase();

    setSearchKeyword(keyword);
    const filtered = OrderItem.filter((item) =>
      item.uid.toLowerCase().includes(keyword)
    );

    if (keyword === "") {
      setOrderData(OrderItem); // Show the original list when the keyword is empty
    } else if (keyword !== "") {
      setOrderData(filtered);
    }
  };

  return (
    <>
      <Row>
        <Col lg={8}></Col>
        <Col lg={4}>
          <FormInput
            label="Search by order id"
            type="text"
            onChange={handleSearch}
            value={searchKeyword}
          />
        </Col>
      </Row>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Order ID</th>
            <th
              onClick={() => handleSort("Order Date", dateSort)}
              style={{ cursor: "pointer" }}
            >
              Order Date
            </th>
            <th
              onClick={() => handleSort("Order Price(in Rs)", defaultSort)}
              style={{ cursor: "pointer" }}
            >
              Order Price(in Rs)
            </th>
            <th>Delivery Address</th>
            <th
              onClick={() => handleSort("Delivery Date", dateSort)}
              style={{ cursor: "pointer" }}
            >
              Delivery Date
            </th>
            <th>Delivery Type</th>
          </tr>
        </thead>
        <tbody>
          {orderData.map((item) => {
            const { uid } = item;
            return <OrderItems item={item} key={uid} />;
          })}
        </tbody>
      </Table>
    </>
  );
};

export default SortableTable;
