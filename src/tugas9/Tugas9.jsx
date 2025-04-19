import React from "react";

export const Tugas9 = () => {
  return (
    <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 w-full mx-auto shadow">
      <table className="table">
        <thead className="bg-purple-500 text-white uppercase">
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Mata Kuliah</th>
            <th>Nilai</th>
            <th>Index Nilai</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <td>John</td>
            <td>Algoritma</td>
            <td>80</td>
            <td>A</td>
            <td className="flex gap-2">
              <button class="btn btn-xs btn-outline">Edit</button>
              <button class="btn btn-xs btn-error text-white">Delete</button>
            </td>
          </tr>
          <tr>
            <th>2</th>
            <td>Doe</td>
            <td>Matematika</td>
            <td>70</td>
            <td>B</td>
            <td className="flex gap-2">
              <button class="btn btn-xs btn-outline">Edit</button>
              <button class="btn btn-xs btn-error text-white">Delete</button>
            </td>
          </tr>
          <tr>
            <th>3</th>
            <td>Frank</td>
            <td>Kalkulus</td>
            <td>60</td>
            <td>C</td>
            <td className="flex gap-2">
              <button class="btn btn-xs btn-outline">Edit</button>
              <button class="btn btn-xs btn-error text-white">Delete</button>
            </td>
          </tr>
          <tr>
            <th>4</th>
            <td>Jason</td>
            <td>Basis Data</td>
            <td>90</td>
            <td>A</td>
            <td className="flex gap-2">
              <button class="btn btn-xs btn-outline">Edit</button>
              <button class="btn btn-xs btn-error text-white">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
