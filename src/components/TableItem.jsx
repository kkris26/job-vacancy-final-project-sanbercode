import React from "react";
import Button from "./Button";

const TableItem = ({ item, index, handleEdit, handleDelete }) => {
  return (
    <tr className="bg-white border-b border-gray-200" key={item._id}>
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
      >
        {index + 1}
      </th>
      <td className="px-6 py-4">{item.name}</td>
      <td className="px-6 py-4">{item.category}</td>
      <td className="px-6 py-4">
        {item.description.split(" ").slice(0, 3).join(" ")}...
      </td>
      <td className="px-6 py-4">
        {item.price === 0
          ? "Free"
          : new Intl.NumberFormat("id-ID", {
              style: "currency",
              currency: "IDR",
              minimumFractionDigits: 0,
            }).format(item.price)}
      </td>
      <td className="px-6 py-4">{item.rating}</td>
      <td className="px-6 py-4">{item.release_year}</td>
      <td className="px-6 py-4">{(item.size / 1024).toFixed(2)} GB</td>
      <td className="px-6 py-4">{item.is_android_app ? "Yes" : "No"}</td>
      <td className="px-6 py-4">{item.is_ios_app ? "Yes" : "No"}</td>
      <td className="px-6 py-4 flex gap-1">
        <Button color="edit" action={() => handleEdit(item._id)}>
          Edit
        </Button>
        <Button color="delete" action={() => handleDelete(item._id)}>
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default TableItem;
