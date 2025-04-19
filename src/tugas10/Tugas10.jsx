import axios from "axios";
import React, { useEffect, useState } from "react";

export const Tugas10 = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get("https://tugas-react-sanber.vercel.app/api/student-scores")
      .then((res) => {
        setData([...res.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const indexNilai = (nilai) => {
    if (nilai >= 80) {
      return "A";
    } else if (nilai >= 70 && nilai < 80) {
      return "B";
    } else if (nilai >= 60 && nilai < 70) {
      return "C";
    } else if (nilai >= 50 && nilai < 60) {
      return "D";
    } else {
      return "E";
    }
  };

  return (
    <>
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 w-full mx-auto shadow">
        <table className="table">
          <thead className="bg-purple-500 text-white uppercase">
            <tr>
              <th>No</th>
              <th>Nama</th>
              <th>Mata Kuliah</th>
              <th>Nilai</th>
              <th>Index Nilai</th>
            </tr>
          </thead>
          <tbody>
            {data !== null &&
              data.map((res, index) => {
                return (
                  <tr key={index}>
                    <th>{index + 1}</th>
                    <td>{res.name}</td>
                    <td>{res.course}</td>
                    <td>{res.score}</td>
                    <td>{indexNilai(res.score)}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};
