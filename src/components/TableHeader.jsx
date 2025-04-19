import React from "react";

const TableHeader = () => {
  return (
    <thead className="text-xs text-white uppercase bg-blue-500">
      <tr>
        <th scope="col" className="px-6 py-3">
          No
        </th>
        <th scope="col" className="px-6 py-3">
          Name
        </th>
        <th scope="col" className="px-6 py-3">
          Category
        </th>
        <th scope="col" className="px-6 py-3">
          Description
        </th>
        <th scope="col" className="px-6 py-3">
          Price
        </th>
        <th scope="col" className="px-6 py-3">
          Rating
        </th>
        <th scope="col" className="px-6 py-3">
          Release Year
        </th>
        <th scope="col" className="px-6 py-3">
          Size
        </th>
        <th scope="col" className="px-6 py-3">
          Android?
        </th>
        <th scope="col" className="px-6 py-3">
          iOS?
        </th>
        <th scope="col" className="px-6 py-3">
          Action
        </th>
      </tr>
    </thead>
  );
};

export default TableHeader;
