import React from "react";
import { MdDeleteForever, MdEditNote } from "react-icons/md";
import { Row, Col } from "react-bootstrap";
import "./shape.styles.scss";

const Shape = ({ shape, setShapeList, id }) => {
  const { name, desc } = shape;
  return (
    <tr className="shape-row-container">
      <td>{name}</td>
      <td className="shape-description">
        <Row>
          <Col md={8} lg={9}>
            {desc}
          </Col>
          <Col md={4} lg={3} style={{ cursor: "pointer" }}>
            <MdEditNote />
            <MdDeleteForever />
          </Col>
        </Row>
      </td>
    </tr>
  );
};

export default Shape;
