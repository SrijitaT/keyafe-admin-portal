import React, { useState, useEffect, useMemo } from "react";
import { Row, Col, Table } from "react-bootstrap";
import { removeEmptyKeys } from "../../utils/remove-empty-keys";

const ProductDetails = ({ productInfo }) => {
  let [productDescription, setProductDescription] = useState({
    category_name: "",
    flavour_name: "",
    description: "",
    shape_name: "",
    type_name: "",
    discounted_price: "",
    original_unit_price: "",
    image_url: "",
    product_title: "",
    product_price_weight_map: {},
  });

  useEffect(() => {
    const { name: categoryName } =
      productInfo && productInfo.Category ? productInfo.Category : "N/A";
    const { variety: flavour } =
      productInfo && productInfo.Flavour ? productInfo.Flavour : "N/A";
    const { desc } =
      productInfo && productInfo.ProductDetail
        ? productInfo.ProductDetail
        : "N/A";
    const { priceWeightMap } =
      productInfo && productInfo.ProductDetail
        ? productInfo.ProductDetail
        : "N/A";
    const { name: shapeName } =
      productInfo && productInfo.Shape ? productInfo.Shape : "N/A";
    const { name: typeName } =
      productInfo && productInfo.Type ? productInfo.Type : "N/A";
    const { discounted_unit_price, unit_price, img_url, title } = productInfo;

    setProductDescription((prevData) => {
      return {
        ...prevData,
        category_name: categoryName,
        flavour_name: flavour,
        description: desc,
        shape_name: shapeName,
        type_name: typeName,
        discounted_price: discounted_unit_price,
        original_unit_price: unit_price,
        image_url: img_url,
        product_title: title,
        product_price_weight_map: priceWeightMap,
      };
    });
  }, []);

  console.log("product price map", productDescription.product_price_weight_map);

  return (
    <>
      <h1> {productDescription.title}</h1>
      <Table responsive hover bordered>
        <tbody>
          {Object.keys(productDescription).map((key) => {
            if (key === "product_price_weight_map") return;
            return (
              <tr>
                <td>{key.split("_").join(" ").toUpperCase()}</td>
                <td>{productDescription[key]}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      {productInfo.Category.name === "Celebrations cakes" && (
        <>
          <h3>Other possible Weight & Price List</h3>
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
              {Object.keys(productDescription.product_price_weight_map).map(
                (key) => {
                  return (
                    <tr>
                      <td>{key}</td>
                      <td>
                        {
                          productDescription.product_price_weight_map[key]
                            .original_price
                        }
                      </td>
                      <td>
                        {
                          productDescription.product_price_weight_map[key]
                            .discounted_price
                        }
                      </td>
                      <td>
                        {
                          productDescription.product_price_weight_map[key]
                            .serves_around
                        }
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </Table>
        </>
      )}
      ;
    </>
  );
};

export default ProductDetails;
