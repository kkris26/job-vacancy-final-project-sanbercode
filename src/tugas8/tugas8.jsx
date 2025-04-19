import { useState } from "react";

export const Tugas8 = () => {
  const [count, setCount] = useState(0);
  const [notif, setNotif] = useState(false);

  const addCount = () => {
    const newCount = count + 1;
    setCount(newCount);
    console.log(newCount)
    if (newCount >= 10) {
        setNotif(true);
    }
};
  return (
    <div className="App">
      <div className="container" id="tugas8">
        <h1 className="count">{count}</h1>
        <button className="btn-click bg-slate-200" onClick={addCount}>
          Tambah Angka
        </button>
        {notif && <p>State count sudah lebih dari 10!!</p>}
      </div>
    </div>
  );
};
