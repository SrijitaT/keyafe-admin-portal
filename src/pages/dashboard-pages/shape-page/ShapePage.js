import React, { useState } from "react";
import Button from "../../../components/custom-button/custom-button.component";
import { Row, Col, Table } from "react-bootstrap";
import Shape from "../../../components/shapes/shape.component";
import "./shape-page.styles.scss";
import AddEditShapeForm from "../../../components/shapes/add-edit-shape-form/add-edit-shape-form.component";

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

  const [toggleShapeForm, setToggleShapeForm] = useState(false);

  const shapeTableHeaders = ["Name", "Description"];

  return (
    <div className="shape-page-wrapper">
      <Row className="shape-head">
        <Col md={9} lg={8}>
          <h2>Insert Shape of Product</h2>
        </Col>
        <Col md={3} lg={4}>
          <Button onClick={() => setToggleShapeForm(true)}>Add</Button>
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
                    shapeList={shapeList}
                  />
                </>
              );
            })}
          </tbody>
        </Table>
      </Row>
      {toggleShapeForm && (
        <AddEditShapeForm
          setShapeList={setShapeList}
          setToggleShapeForm={setToggleShapeForm}
        />
      )}
    </div>
  );
};

export default ShapePage;
