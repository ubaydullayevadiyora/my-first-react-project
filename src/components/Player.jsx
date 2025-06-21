import React, { useState } from "react";

const Players = () => {
  const [form, setForm] = useState({
    name: "",
    number: "",
    position: "",
    club: "",
  });

  const [players, setPlayers] = useState([]);
  const [alert, setAlert] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const submit = (e) => {
    e.preventDefault();
    const isFind = players.some((p) => p.name === form.name);
    if (isFind) {
      setAlert(`${form.name} oldin qo'shilgan`);
    } else {
      setPlayers((prev) => [...prev, form]);
      setForm({ name: "", number: "", position: "", club: "" });
      setAlert("");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        {/* Form section */}
        <div className="col-md-6">
          <h3 className="mb-3">Yangi o'yinchi qo'shish</h3>

          {alert && <div className="alert alert-warning">{alert}</div>}

          <form onSubmit={submit}>
            <div className="mb-3">
              <label className="form-label">Ism</label>
              <input
                type="text"
                name="name"
                className="form-control"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Raqam</label>
              <input
                type="number"
                name="number"
                className="form-control"
                value={form.number}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Pozitsiya</label>
              <input
                type="text"
                name="position"
                className="form-control"
                value={form.position}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Klub</label>
              <input
                type="text"
                name="club"
                className="form-control"
                value={form.club}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn btn-success w-100">
              Qo'shish
            </button>
          </form>
        </div>

        {/* Table section */}
        <div className="col-md-6">
          <h3 className="mb-3">O'yinchilar ro'yxati</h3>

          {players.length === 0 ? (
            <p>Hozircha o'yinchilar yo'q.</p>
          ) : (
            <table className="table table-bordered table-striped">
              <thead className="table-dark">
                <tr>
                  <th>#</th>
                  <th>Ism</th>
                  <th>Raqam</th>
                  <th>Pozitsiya</th>
                  <th>Klub</th>
                </tr>
              </thead>
              <tbody>
                {players.map((player, i) => (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{player.name}</td>
                    <td>{player.number}</td>
                    <td>{player.position}</td>
                    <td>{player.club}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default Players;
