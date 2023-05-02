import React, { useEffect } from "react";
import { Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { getAvailableFlavour } from "../../redux/products/product.action";

import FlavourBody from "./flavour-table.component";
import { Icon } from "@iconify/react";

const Flavour = () => {
  const dispatch = useDispatch();
  const flavourListing = useSelector((state) => state.product.flavourList);

  useEffect(() => {
    dispatch(getAvailableFlavour());
  }, []);

  const flavourTableHeaders = ["Variety", "descriptions"];

  return (
    <>
      {flavourListing.length === 0 ? (
        <Icon
          icon="eos-icons:bubble-loading"
          color="black"
          width="20"
          height="20"
        />
      ) : (
        <Row>
          <Table responsive hover bordered className="flavour-table">
            <thead>
              <tr
                style={{
                  textAlign: "center",
                  height: "50px",
                }}
              >
                {flavourTableHeaders.map((flavourHead, idx) => (
                  <th style={{ height: "50px" }} key={idx}>
                    {" "}
                    {flavourHead}{" "}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody style={{ position: "relative" }}>
              {Array.isArray(flavourListing) &&
              flavourListing &&
              flavourListing.length === 0 ? (
                <Icon
                  icon="eos-icons:bubble-loading"
                  color="black"
                  width="20"
                  height="20"
                />
              ) : (
                Array.isArray(flavourListing) &&
                flavourListing &&
                flavourListing.map((flavour, idx) => {
                  return (
                    <FlavourBody
                      key={idx}
                      flavour={flavour}
                      // setData={setFlavourList}
                    />
                  );
                })
              )}
            </tbody>
          </Table>
        </Row>
      )}
    </>
  );
};

export default Flavour;
