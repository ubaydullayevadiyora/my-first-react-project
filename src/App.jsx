// 23.06.2025
import React from "react";
import Users from "./pages/Users";
import Product from "./pages/Product";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Counter from "./pages/Counter";
import SingleUser from "./pages/SingleUser";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<SingleUser />} />
        <Route path="/product" element={<Product />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </div>
  );
};

export default App;
