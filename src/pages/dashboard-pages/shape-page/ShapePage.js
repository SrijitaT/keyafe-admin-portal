import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAvailableShapes } from "../../../redux/products/product.action";
import Button from "../../../components/custom-button/custom-button.component";
import { Row, Col, Table } from "react-bootstrap";
import Shape from "../../../components/shapes/shape.component";
import "./shape-page.styles.scss";
import AddEditShapeForm from "../../../components/shapes/add-edit-shape-form/add-edit-shape-form.component";
import "react-loader-spinner";
import { Oval } from "react-loader-spinner";
import SideNavBar from "../../../components/sidenav/sidenav.component";

const ShapePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAvailableShapes());
  }, []);

  const shapeListing = useSelector((state) => state.product.shapeList);

  const [shapeList, setShapeList] = useState(shapeListing);

  console.log("list of shapes", shapeListing);

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
            {shapeListing && Array.isArray(shapeListing) ? (
              <Table responsive className="shape-table">
                <thead>
                  <tr style={{ textAlign: "center" }}>
                    {shapeTableHeaders.map((header, idx) => (
                      <th key={idx}>{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody style={{ position: "relative" }}>
                  {shapeListing && Array.isArray(shapeListing) ? (
                    shapeListing.map((shape, idx) => {
                      return (
                        <Shape
                          key={idx}
                          id={idx}
                          shape={shape}
                          setShapeList={setShapeList}
                          shapeList={shapeList}
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
          </Row>
          {(toggleShapeForm || editShapeObject) && (
            <AddEditShapeForm
              shapeList={shapeList}
              setShapeList={setShapeList}
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
