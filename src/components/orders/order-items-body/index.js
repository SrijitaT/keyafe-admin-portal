import React from "react";

const OrderItems = ({ item }) => {
  const itemCreationDate = new Date(item?.createdAt.split("T")[0]);
  const itemDateFormat = `${itemCreationDate.getDate()}-${
    itemCreationDate.getMonth() + 1
  }-${itemCreationDate.getFullYear()}`;

  const { address_line1, address_line2, city, pincode } = item?.UserAddress;

  return (
    <tr>
      <td>{item.uid}</td>
      <td>{itemDateFormat}</td>
      <td>
        {item?.currency} {item?.total_amount_payable}
      </td>
      <td>
        {address_line1},<br />
        {address_line2},<br />
        {city} - {pincode}
      </td>
      <td>{item?.items[0].delivery_date}</td>
      <td>{item?.items[0].delivery_type}</td>
    </tr>
  );
};

export default OrderItems;
