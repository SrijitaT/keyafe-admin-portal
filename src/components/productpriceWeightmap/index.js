import React from "react";
import { Table } from "react-bootstrap";

const ProductPriceWeightMapTable = (priceWeightMap) => {
  console.log("ProductPriceWeightMapTable", priceWeightMap);
  let weightMap = { ...priceWeightMap };

  return (
    <>
      {Object.keys(weightMap).length > 0 && (
        <Table responsive hover bordered>
          <thead>
            <tr>
              <th>Weight</th>
              <th>Original Price(Rs)</th>
              <th>Discounted Price(Rs)</th>
              <th>Serves Around</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(weightMap).map((key) => {
              console.log("key", key);
              const { original_price, discounted_price, serves_around } =
                weightMap[key];

              return (
                <tr key={key}>
                  <td>{key}</td>
                  <td>{original_price}</td>
                  <td>{discounted_price}</td>
                  <td>{serves_around}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default ProductPriceWeightMapTable;
