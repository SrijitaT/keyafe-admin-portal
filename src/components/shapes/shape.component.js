import React from "react";
import { MdDeleteForever, MdEditNote } from "react-icons/md";

const Shape = ({ shape, setShapeList, id }) => {
  const { name, desc } = shape;
  return (
    <tr style={{ textAlign: "center" }}>
      <td>{name}</td>
      <td>
        {desc}
        <MdEditNote />
        <MdDeleteForever />
      </td>
    </tr>
  );
};

export default Shape;
