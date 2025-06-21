import React, { useState } from "react";

const Counter = () => {
  const [counters, setCounters] = useState([]);

  const addCounter = () => {
    setCounters((prev) => [...prev, 0]);
  };

  const increment = (index) => {
    const updated = [...counters];
    updated[index]++;
    setCounters(updated);
  };

  const decrement = (index) => {
    const updated = [...counters];
    updated[index]--;
    setCounters(updated);
  };

  return (
    <div className="container mt-4">
      <button className="btn btn-dark mb-4" onClick={addCounter}>
        Add Counter
      </button>

      {counters.map((value, index) => (
        <div
          key={index}
          className="d-flex align-items-center mb-2"
          style={{ gap: "10px" }}
        >
          <button
            className="btn btn-outline-secondary"
            onClick={() => increment(index)}
          >
            +
          </button>
          <span style={{ minWidth: "20px", textAlign: "center" }}>{value}</span>
          <button
            className="btn btn-outline-secondary"
            onClick={() => decrement(index)}
          >
            -
          </button>
        </div>
      ))}
    </div>
  );
};

export default Counter;
