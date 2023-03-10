import React from "react";
import { Row, Col, Table } from "react-bootstrap";
import { Icon } from "@iconify/react";
import "bootstrap/dist/css/bootstrap.min.css";

const ProductsTable = ({ products }) => {
  const productTableHeaders = [
    "Product_Id",
    "Image",
    "Product Title",
    "Category_Id",
    "Type_Id",
    "Product_Details_Id",
    "Shape_Id",
    "Original_Flavour_Id",
  ];

  return (
    <div>
      {products.length == 0 ? (
        <Icon
          icon="eos-icons:bubble-loading"
          color="black"
          width="20"
          height="20"
        />
      ) : (
        <Row>
          <Table responsive hover bordered className="product-table">
            <thead>
              <tr
                style={{
                  textAlign: "center",
                  height: "50px",
                }}
              >
                {productTableHeaders.map((productHead, idx) => (
                  <th style={{ height: "50px" }} key={idx}>
                    {" "}
                    {productHead}{" "}
                  </th>
                ))}
              </tr>
            </thead>
          </Table>
        </Row>
      )}
    </div>
  );
};

export default ProductsTable;
