import React from 'react'

const TableItemSkeleton = () => {
  return (
    <tr className="animate-pulse bg-white border-b border-gray-200">
      {[...Array(11)].map((_, idx) => (
        <td key={idx} className="px-6 py-4">
          <div className="h-4 bg-gray-200 rounded w-full"></div>
        </td>
      ))}
    </tr>
  );
};
export default TableItemSkeleton
