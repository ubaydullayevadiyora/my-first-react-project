import React from "react";

const Card = ({ item }) => {
  const imageSrc =
    typeof item.img === "string"
      ? item.img
      : item.img
      ? URL.createObjectURL(item.img)
      : "";

  return (
    <div className="card h-100">
      <div className="card-body">
        <img
          src={imageSrc}
          alt={item.name}
          className="w-100 rounded-1 mb-3"
          style={{ height: "150px", objectFit: "contain" }}
        />
        <h5 className="text-center">{item.name}</h5>
      </div>
      <div className="card-footer d-flex justify-content-between">
        <span>${item.price}</span>
        <span>Qty: {item.quantity}</span>
      </div>
    </div>
  );
};

export default Card;
