import React from "react";
import { MdDeleteForever, MdEditNote } from "react-icons/md";
import { Row, Col } from "react-bootstrap";
import "./shape.styles.scss";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Shape = ({ shape, setShapeList, id, shapeList, setEditShapeObject }) => {
  const { name, desc } = shape;

  const handleDelete = (id) => {
    setShapeList([...shapeList.slice(0, id), ...shapeList.slice(id + 1)]);
    toast.success(`Shape id: ${id} deleted`, {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const handleEdit = (id) => {
    setEditShapeObject({
      ...shapeList[id],
      index: id,
    });
  };

  return (
    <tr className="shape-row-container">
      <td>{name}</td>
      <td className="shape-description">
        <Row>
          <Col md={8} lg={9}>
            {desc}
          </Col>
          <Col md={4} lg={3}>
            <Row>
              <Col lg={6}>
                <span>
                  <MdEditNote onClick={() => handleEdit(id)} />
                </span>
              </Col>
              <Col lg={6}>
                <span>
                  <MdDeleteForever onClick={() => handleDelete(id)} />
                </span>
              </Col>
            </Row>
          </Col>
        </Row>
        <ToastContainer />
      </td>
    </tr>
  );
};

export default Shape;
