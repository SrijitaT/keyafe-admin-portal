import React, { useState, useEffect } from "react";
import Button from "../../../components/custom-button/custom-button.component";
import { Row, Col, Table } from "react-bootstrap";
import Shape from "../../../components/shapes/shape.component";
import "./shape-page.styles.scss";
import AddEditShapeForm from "../../../components/shapes/add-edit-shape-form/add-edit-shape-form.component";

import useFetchData from "../../../custom-hooks/useFetchData";

const ShapePage = () => {
  const {
    data: availableShapeLists,
    loading,
    setData,
  } = useFetchData("shapes");

  console.log(availableShapeLists);

  const [toggleShapeForm, setToggleShapeForm] = useState(false);
  const [editShapeObject, setEditShapeObject] = useState(null);
  const shapeTableHeaders = ["Name", "Description"];

  console.log("edit shape of", editShapeObject);

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
            {!loading &&
              availableShapeLists &&
              Array.isArray(availableShapeLists) &&
              availableShapeLists.map((shape, id) => {
                return (
                  <>
                    <Shape
                      key={id}
                      id={id}
                      shape={shape}
                      setShapeList={setData}
                      shapeList={availableShapeLists}
                      setEditShapeObject={setEditShapeObject}
                    />
                  </>
                );
              })}
          </tbody>
        </Table>
      </Row>
      {(toggleShapeForm || editShapeObject) && (
        <AddEditShapeForm
          shapeList={availableShapeLists}
          setShapeList={setData}
          setToggleShapeForm={setToggleShapeForm}
          editShapeObject={editShapeObject}
          setEditShapeObject={setEditShapeObject}
        />
      )}
    </div>
  );
};

export default ShapePage;
