import React, { useEffect, useState } from "react";
import { Row, Col, Table } from "react-bootstrap";
import useFetchData from "../../custom-hooks/useFetchData";

import FlavourBody from "./flavour-table.component";
import { Icon } from "@iconify/react";

const Flavour = () => {
  const flavourTableHeaders = ["Variety", "descriptions"];
  //   const [loading, setLoading] = useState(false);
  const flavourData = useFetchData("flavours");

  const { data, loading, setData } = flavourData ? flavourData : {};

  console.log("list of available flavours", flavourData);
  return (
    <>
      {loading ? (
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
              {loading && !Array.isArray(data) ? (
                <Icon
                  icon="eos-icons:bubble-loading"
                  color="black"
                  width="20"
                  height="20"
                />
              ) : (
                Array.isArray(data) &&
                flavourData &&
                data.map((flavour, idx) => {
                  return (
                    <FlavourBody
                      key={idx}
                      flavour={flavour}
                      setData={setData}
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
