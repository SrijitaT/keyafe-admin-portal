import React from "react";
import { Icon } from "@iconify/react";

const FlavourBody = ({ flavour, setData }) => {
  const { variety, desc } = flavour;
  return (
    <tr>
      <td> {variety} </td>
      <td> {desc} </td>
    </tr>
  );
};

export default FlavourBody;
