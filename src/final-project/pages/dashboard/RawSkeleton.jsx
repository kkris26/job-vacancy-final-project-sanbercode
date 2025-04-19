import React from 'react'

const RawSkeleton = () => {
  return (
    <tr className="animate-pulse">
      <th className="h-8 w-32 bg-slate-200 rounded-md"></th>
      <td className="h-8 w-32 bg-slate-200 rounded-md"></td>
      <td className="h-8 w-32 bg-slate-200 rounded-md"></td>
      <td className="h-8 w-32 bg-slate-200 rounded-md"></td>
      <td className="h-8 w-8 bg-slate-200 rounded-md"></td>
      <td className="h-8 w-32 bg-slate-200 rounded-md"></td>
    </tr>
  );
}

export default RawSkeleton