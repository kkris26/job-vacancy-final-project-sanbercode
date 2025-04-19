const Tugas7 = (props) => {
  const { name, batch, email } = props;
  return (
    <div className="App">
      <div className="container">
        <h1>Data diri peserta kelas Reactjs</h1>
        <hr></hr>
        <ul>
          <li>
            <strong>Nama Lengkap : </strong>
            {name}
          </li>
          <li>
            <strong>Email : </strong>
            {email}
          </li>
          <li>
            <strong>Batch Pelatihan : </strong>
            {batch}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Tugas7;
