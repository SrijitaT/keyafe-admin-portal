import React from "react";
import { MdDeleteForever, MdEditNote } from "react-icons/md";
import { Row, Col } from "react-bootstrap";
import "./shape.styles.scss";

const Shape = ({ shape, setShapeList, id, shapeList, setEditShapeObject }) => {
  const { name, desc } = shape;

  const handleDelete = (id) => {
    setShapeList([...shapeList.slice(0, id), ...shapeList.slice(id + 1)]);
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
      </td>
    </tr>
  );
};

export default Shape;
