import React from "react";

const Card = (item) => {
  return (
    <div className="card" key={item.id}>
      <div className="card-body">
        <img src={item.img} alt="" className="w-100 rounded-1" />
      </div>
      <div className="card-footer">
        <h3 className="text-center">{item.name}</h3>
        <div className="d-flex justify-content-between">
          <p>{item.price}</p>
          <p>{item.quantity}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
