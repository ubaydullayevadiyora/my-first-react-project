import React, { useState } from "react";
import { Button } from "reactstrap";
import Card from "../components/Card";
import AddProductModal from "../components/modal/ProductModal";

import iphoneImg from "../assets/iphone.jpg";
import mackbookImg from "../assets/mackbook.jpg";

const Product = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Mackbook",
      price: 1000,
      sale: 10,
      quantity: 30,
      img: mackbookImg,
    },
    {
      id: 2,
      name: "Iphone 15 Pro",
      price: 1200,
      sale: 5,
      quantity: 15,
      img: iphoneImg,
    },
  ]);

  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    sale: "",
    quantity: "",
    img: null,
  });

  const [searchTerm, setSearchTerm] = useState("");

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

  const handleEditProduct = (product) => {
    setSelectedProduct(product);
    setNewProduct(product);
    setModalOpen(true);
  };

  const handleDeleteProduct = (id) => {
    const confirmDelete = window.confirm("Rostdan ham o‘chirmoqchimisiz?");
    if (confirmDelete) {
      setProducts(products.filter((p) => p.id !== id));
    }
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

    setNewProduct({ name: "", price: "", sale: "", quantity: "", img: null });
    setSelectedProduct(null);
    setModalOpen(false);
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
    if (!modalOpen) setSelectedProduct(null);
  };

  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Mahsulotlar boshqaruvi</h2>

      <div className="text-center mb-3">
        <Button color="info" onClick={toggleModal}>
          Mahsulot qo‘shish
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
          <div className="text-center w-100">Mos mahsulot topilmadi</div>
        )}
      </div>

      <AddProductModal
        isOpen={modalOpen}
        toggle={toggleModal}
        newProduct={newProduct}
        handleInputChange={handleInputChange}
        handleImageChange={handleImageChange}
        handleAddProduct={handleSaveProduct}
        isEdit={!!selectedProduct}
      />
    </div>
  );
};

export default Product;
