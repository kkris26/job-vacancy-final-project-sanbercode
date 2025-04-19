import axios from "axios";
import React, { useEffect, useState } from "react";

export const Tugas11 = () => {
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

  const handleDelete = (id) => {
    axios
      .delete(`https://tugas-react-sanber.vercel.app/api/student-scores/${id}`)
      .then(() => {
        setData(data.filter((data) => data.studentId !== id));
      })
      .catch((error) => console.error(error));
  };

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

  const [input, setInput] = useState({
    name: "",
    course: "",
    score: "",
  });

  const handleInput = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://tugas-react-sanber.vercel.app/api/student-scores", input)
      .then((res) => {
        console.log(res.data);
        setData([...data, res.data]);
        setInput({ name: "", course: "", score: "" });
      })
      .catch((err) => {
        console.log(err);
      });
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
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data !== null &&
              data.map((res, index) => {
                return (
                  <tr key={res.studentId}>
                    <th>{index + 1}</th>
                    <td>{res.name}</td>
                    <td>{res.course}</td>
                    <td>{res.score}</td>
                    <td>{indexNilai(res.score)}</td>
                    <td>
                      <button
                        className="btn bg-red-400 text-white"
                        onClick={() => {
                          handleDelete(res.studentId);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      <form
        onSubmit={handleSubmit}
        action=""
        className="flex gap-4 items-end mt-3 p-8 shadow-sm rounded"
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="">Nama</label>
          <input
            onChange={handleInput}
            type="text"
            placeholder="Type here"
            className="input"
            name="name"
            value={input.name}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="">Mata Kuliah</label>
          <input
            onChange={handleInput}
            name="course"
            value={input.course}
            type="text"
            placeholder="Type here"
            className="input"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="">Nilai</label>
          <input
            onChange={handleInput}
            name="score"
            value={input.score}
            type="number"
            placeholder="Input Number"
            className="input"
          />
        </div>
        <button
          disabled={!input.name || !input.course || !input.score}
          type="submit"
          className="btn bg-blue-600 text-white"
        >
          Submit
        </button>
      </form>
    </>
  );
};
