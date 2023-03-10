import React, { useState, useEffect } from "react";
import Button from "../../../components/custom-button/custom-button.component";
import { Row, Col, Table } from "react-bootstrap";
import Shape from "../../../components/shapes/shape.component";
import "./shape-page.styles.scss";
import AddEditShapeForm from "../../../components/shapes/add-edit-shape-form/add-edit-shape-form.component";
import "react-loader-spinner";
import { Oval } from "react-loader-spinner";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useFetchData from "../../../custom-hooks/useFetchData";
import SideNavBar from "../../../components/sidenav/sidenav.component";

const ShapePage = () => {
  const {
    data: availableShapeLists,
    loading,
    setData,
  } = useFetchData("shapes");

  console.log(availableShapeLists.data);

  const [toggleShapeForm, setToggleShapeForm] = useState(false);
  const [editShapeObject, setEditShapeObject] = useState(null);
  const shapeTableHeaders = ["Name", "Description"];

  console.log("edit shape of", editShapeObject);

  return (
    <Row>
      <Col lg={2}>
        <SideNavBar />
      </Col>
      <Col lg={10}>
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
            <Table responsive className="shape-table">
              <thead>
                <tr style={{ textAlign: "center" }}>
                  {shapeTableHeaders.map((header, idx) => (
                    <th key={idx}>{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody style={{ position: "relative" }}>
                {!loading &&
                availableShapeLists &&
                Array.isArray(availableShapeLists) ? (
                  availableShapeLists.map((shape, idx) => {
                    return (
                      <Shape
                        key={idx}
                        id={idx}
                        shape={shape}
                        setShapeList={setData}
                        shapeList={availableShapeLists}
                        setEditShapeObject={setEditShapeObject}
                      />
                    );
                  })
                ) : (
                  <div className="shape-loader">
                    <Oval
                      height={50}
                      width={50}
                      color="#4fa94d"
                      wrapperStyle={{}}
                      wrapperClass=""
                      visible={true}
                      ariaLabel="oval-loading"
                      secondaryColor="#4fa94d"
                      strokeWidth={2}
                      strokeWidthSecondary={2}
                    />
                  </div>
                )}
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
      </Col>
    </Row>
  );
};

export default ShapePage;
