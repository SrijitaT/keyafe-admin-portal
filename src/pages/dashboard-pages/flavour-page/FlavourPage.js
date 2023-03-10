import React, { useState } from "react";
import SideNavBar from "../../../components/sidenav/sidenav.component";
import { Row, Col, Table } from "react-bootstrap";
import useFetchData from "../../../custom-hooks/useFetchData";
import Button from "../../../components/custom-button/custom-button.component";
import "./flavour-page.styles.scss";

const FlavourPage = () => {
  const [toggleFlavourForm, setToggleFlavourForm] = useState(false);

  return (
    <Row>
      <Col lg={2}>
        <SideNavBar />
      </Col>
      <Col lg={10}>
        <div className="flavour-page-wrapper">
          <Row className="flavour-head">
            <Col md={9} lg={8}>
              <h2>Insert Flavour of Product</h2>
            </Col>
            <Col md={3} lg={4}>
              <Button onClick={() => setToggleFlavourForm(true)}>Add</Button>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  );
};

export default FlavourPage;
