import React, { useState } from "react";
import FormInput from "../../../components/form-input/form-input.component";
import Button from "../../../components/custom-button/custom-button.component";
import { Row, Col, Table } from "react-bootstrap";
import Shape from "../../../components/shapes/shape.component";
import "./shape-page.styles.scss";

const ShapePage = () => {
  const [shapeList, setShapeList] = useState([
    {
      name: "Round",
      desc: "Circular",
    },
    {
      name: "Rectangle",
      desc: "Rectangular",
    },
    {
      name: "Square",
      desc: "Square",
    },
    {
      name: "Sphere",
      desc: "Spherical",
    },
  ]);

  const shapeTableHeaders = ["Name", "Description"];

  return (
    <div className="shape-page-wrapper">
      <Row style={{ marginBottom: "20px" }}>
        <Col md={9} lg={8}>
          <h2>Insert Shape of Product</h2>
        </Col>
        <Col md={3} lg={4}>
          <Button>Add new Shape</Button>
        </Col>
      </Row>
      <Row>
        <Table responsive hover bordered className="shape-table">
          <thead>
            <tr style={{ textAlign: "center" }}>
              {shapeTableHeaders.map((header, idx) => (
                <th key={idx}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {shapeList.map((shape, id) => {
              return (
                <>
                  <Shape
                    key={id}
                    id={id}
                    shape={shape}
                    setShapeList={setShapeList}
                  />
                </>
              );
            })}
          </tbody>
        </Table>
      </Row>
    </div>
  );
};

export default ShapePage;
