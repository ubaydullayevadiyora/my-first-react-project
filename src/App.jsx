import React, { useState } from "react";
import Counter from "./components/Counter";
import Players from "./components/Player";
import Card from "./components/Card";
const App = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "product-1",
      price: 1200,
      sale: 13,
      quantity: 30,
      img: "./src/assets/react.svg",
    },
    {
      id: 2,
      name: "product-1",
      price: 1200,
      sale: 13,
      quantity: 30,
      img: "./src/assets/react.svg",
    },
    {
      id: 3,
      name: "product-1",
      price: 1200,
      sale: 13,
      quantity: 30,
      img: "./src/assets/react.svg",
    },
    {
      id: 4,
      name: "product-1",
      price: 1200,
      sale: 13,
      quantity: 30,
      img: "./src/assets/react.svg",
    },
  ]);
  return (
    <div className="container">
      <div className="row mt-3">
        {products.map((item) => (
          <div className="col-md-4" key={item.id}>
            <Card item={item} />
          </div>
        ))}
      </div>
      {/* <Counter /> */}
      {/* <Players /> */}
    </div>
  );
};

export default App;
