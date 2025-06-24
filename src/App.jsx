import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  useLocation,
} from "react-router-dom";
import { Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Card from "./components/Card";
import Players from "./components/Player";
import AddProductModal from "./components/modal/ProductModal";

const AppContent = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleEditProduct = (product) => {
    setSelectedProduct(product);
    setNewProduct(product);
    setModalOpen(true);
  };

  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Mackbook",
      price: 1000,
      sale: 10,
      quantity: 30,
      img: "./src/assets/mackbook.jpg",
    },
    {
      id: 2,
      name: "Iphone 15 Pro",
      price: 1200,
      sale: 5,
      quantity: 15,
      img: "./src/assets/iphone.jpg",
    },
  ]);

  const [modalOpen, setModalOpen] = useState(false);
  const toggleModal = () => setModalOpen(!modalOpen);

  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    sale: "",
    quantity: "",
    img: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    setNewProduct((prev) => ({
      ...prev,
      img: e.target.files[0],
    }));
  };

  const handleDeleteProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id));
    alert("Mahsulotni chindan ham o'chirishni xohlaysizmi?");
  };

  const handleSaveProduct = (e) => {
    e.preventDefault();

    if (selectedProduct) {

      setProducts((prev) =>
        prev.map((p) =>
          p.id === selectedProduct.id
            ? { ...selectedProduct, ...newProduct }
            : p
        )
      );
    } else {

      const newId = products.length ? products[products.length - 1].id + 1 : 1;
      setProducts([...products, { id: newId, ...newProduct }]);
    }

    // Tozalash
    setNewProduct({ name: "", price: "", sale: "", quantity: "", img: null });
    setSelectedProduct(null);
    setModalOpen(false);
  };

  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const location = useLocation();

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">
        Tekshirmoqchi bo'lgan vazifangizni tanlang
      </h2>

      <nav className="d-flex justify-content-center gap-3 mb-4">
        <Link to="/card">
          <Button color="primary">Card</Button>
        </Link>
        <Link to="/player">
          <Button color="success">Player</Button>
        </Link>
      </nav>

      {location.pathname === "/card" && (
        <>
          <div className="text-center mb-3">
            <Button color="info" onClick={toggleModal}>
              Add Product
            </Button>
          </div>
          <div className="text-center mb-4">
            <input
              type="text"
              placeholder="Mahsulot qidirish..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                padding: "8px 12px",
                width: "300px",
                borderRadius: "6px",
                border: "1px solid #ccc",
              }}
            />
          </div>
        </>
      )}

      <Routes>
        <Route path="/" element={<Navigate to="/player" />} />
        <Route
          path="/card"
          element={
            <div className="row">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((item) => (
                  <div className="col-md-4 mb-3" key={item.id}>
                    <Card
                      item={item}
                      onEdit={handleEditProduct}
                      onDelete={handleDeleteProduct}
                    />
                  </div>
                ))
              ) : (
                <div className="text-center">Mos mahsulot topilmadi</div>
              )}
            </div>
          }
        />
        <Route path="/player" element={<Players />} />
        <Route
          path="*"
          element={<div className="text-center">Faqat 2 ta vazifa mavjud</div>}
        />
      </Routes>

      {/* Modal component */}
      <AddProductModal
        isOpen={modalOpen}
        toggle={() => {
          setModalOpen(false);
          setSelectedProduct(null);
        }}
        newProduct={newProduct}
        handleInputChange={handleInputChange}
        handleImageChange={handleImageChange}
        handleAddProduct={handleSaveProduct}
        isEdit={!!selectedProduct}
      />
    </div>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;

// 23.06.2025
// import React from "react";
// import Users from "./components/Users";

// const App = () => {
//   return (
//     <div>
//       <Users />
//     </div>
//   );
// };

// export default App;
