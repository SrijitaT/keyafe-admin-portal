import React, { useState, useEffect, useCallback } from "react";
import SideNavBar from "../../../components/sidenav/sidenav.component";
import { Row, Col } from "react-bootstrap";
import CustomCard from "../../../components/custom-cards";
// import { useDispatch, useSelector } from "react-redux";
// import { getOrders } from "../../../redux/orders/orders.action";
import axiosInterceptor from "../../../utils/api/axiosInterceptor";

const OrderPage = () => {
  //   const orders = useSelector((state) => state.order);
  //   const dispatch = useDispatch();
  const [order, setOrder] = useState([1]);

  //   const getOrders = useCallback(async () => {
  //     const response = await axiosInterceptor.get("admin/orders?page=1");
  //     if (response?.data?.data) {
  //       setOrder(...response.data.data);
  //     }
  //   }, [order]);

  //   const fetchOrders = () => async () => {
  //     const response = await axiosInterceptor.get("admin/orders?page=1");
  //     if (response?.data?.data) {
  //       setOrder(...response.data.data);
  //     }
  //   };

  //   useEffect(() => {
  //     getOrders();
  //   }, []);

  //   console.log("orders", order);

  return (
    <Row>
      <Col lg={2}>
        <SideNavBar />
      </Col>
      <Col lg={10}>
        <CustomCard headerInfo="Total Orders" info={order.length} />
      </Col>
    </Row>
  );
};

export default OrderPage;

//count={order.length}
