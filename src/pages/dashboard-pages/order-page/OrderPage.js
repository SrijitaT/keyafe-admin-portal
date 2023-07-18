import React, { useState, useEffect, useCallback } from "react";
import SideNavBar from "../../../components/sidenav/sidenav.component";
import { Row, Col } from "react-bootstrap";
import CustomCard from "../../../components/custom-cards";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../../redux/orders/orders.action";
import axiosInterceptor from "../../../utils/api/axiosInterceptor";
import OrderContainer from "../../../components/orders/order-container/order-container.component";
import useFetchData from "../../../custom-hooks/useFetchData";

const OrderPage = () => {
  const orders = useSelector((state) => state.order);
  const dispatch = useDispatch();

  const { data, error, loading } = useFetchData("admin/orders?page=1");

  console.log("orders fetched successfully", data);

  const [order, setOrder] = useState(orders);

  // const getOrders = async () => {
  //   const response = await axiosInterceptor.get("admin/orders?page=1");
  //   console.log("data from api", response);
  //   if (response?.data) {
  //     setOrder(response.data);
  //   }
  // };

  // const fetchOrders = () => async () => {
  //   const response = await axiosInterceptor.get("admin/orders?page=1");
  //   if (response?.data?.data) {
  //     setOrder(...response.data.data);
  //   }
  // };

  useEffect(() => {
    dispatch(getOrders());
  }, []);

  console.log("orders", order);

  return (
    <Row>
      <Col lg={2}>
        <SideNavBar />
      </Col>
      <Col lg={10}>
        <OrderContainer orderData={orders} />
        {/* <CustomCard headerInfo="Total Orders" info={order.data.length} /> */}
      </Col>
    </Row>
  );
};

export default OrderPage;

//count={order.length}
