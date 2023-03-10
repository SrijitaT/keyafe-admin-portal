import React, { useState } from "react";
import SideNavBar from "../../../components/sidenav/sidenav.component";
import { Row, Col, Table } from "react-bootstrap";
import useFetchData from "../../../custom-hooks/useFetchData";

const FlavourPage = () => {
  const flavourTableHeaders = ["Variety", "descriptions"];

  return (
    <Row>
      <Col lg={2}>
        <SideNavBar />
      </Col>
      <Col lg={10}>Flavour Table</Col>
    </Row>
  );
};

export default FlavourPage;
