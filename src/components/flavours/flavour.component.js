import React from "react";
import "rsuite/dist/rsuite.min.css";
import { Table } from "rsuite";
import useFetchData from "../../custom-hooks/useFetchData";

const { Column, HeaderCell, Cell } = Table;

const Flavour = () => {
  const flavourTableHeaders = ["Variety", "descriptions"];
  const { data: flavourData, loading } = useFetchData("flavours");

  console.log("flavours", flavourData);
  return (
    <Table
      height={400}
      data={flavourData}
      onRowClick={(rowData) => {
        console.log(rowData);
      }}
    >
      {flavourTableHeaders.map((flavourHead, idx) => {
        return (
          <Column width={150} key={idx}>
            <HeaderCell>flavourHead</HeaderCell>
            <Cell dataKey={`${flavourHead}`} />
          </Column>
        );
      })}
    </Table>
  );
};

export default Flavour;
