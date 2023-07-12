import React, { useState } from "react";
import { Table } from "rsuite";

const { Column, HeaderCell, Cell } = Table;

const SortableTable = ({ data }) => {
  const [sortColumn, setSortColumn] = useState(null);
  const [sortType, setSortType] = useState(null);

  const handleSortColumn = (nextSortColumn) => {
    if (sortColumn === nextSortColumn) {
      // Toggle sort type (asc/desc) if same column clicked
      setSortType(sortType === "asc" ? "desc" : "asc");
    } else {
      // Set new sort column and default sort type (asc)
      setSortColumn(nextSortColumn);
      setSortType("asc");
    }
  };

  // Sort the data based on the sort column and type
  const sortedData = [...data].sort((a, b) => {
    if (sortColumn && sortType) {
      const aValue = a[sortColumn];
      const bValue = b[sortColumn];
      if (sortType === "asc") {
        return aValue.localeCompare(bValue);
      } else {
        return bValue.localeCompare(aValue);
      }
    }
    return 0;
  });

  return (
    <Table
      height={400}
      data={sortedData}
      sortColumn={sortColumn}
      sortType={sortType}
      onSortColumn={handleSortColumn}
    >
      <Column width={200} sortable>
        <HeaderCell>Order ID</HeaderCell>
        <Cell dataKey="column1" />
      </Column>
      <Column width={200} sortable>
        <HeaderCell>Order Details</HeaderCell>
        <Cell dataKey="column2" />
      </Column>
      <Column width={200} sortable>
        <HeaderCell>Order Status</HeaderCell>
        <Cell dataKey="column3" />
      </Column>
      {/* <Column width={200} sortable>
        <HeaderCell>Payment Details</HeaderCell>
        <Cell dataKey="column4" />
      </Column> */}
      {/* Add more columns as needed */}
    </Table>
  );
};

export default SortableTable;
