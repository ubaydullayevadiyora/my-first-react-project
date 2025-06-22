import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  useLocation,
} from "react-router-dom";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import Card from "./components/Card";
import Counter from "./components/Counter";
import Players from "./components/Player";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Mackbook",
      price: 1000,
      sale: 10,
      quantity: 30,
      img: "./src/assets/mackbook.jpg",
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

  const handleAddProduct = (e) => {
    e.preventDefault();
    const newId = products.length ? products[products.length - 1].id + 1 : 1;
    setProducts([
      ...products,
      {
        id: newId,
        ...newProduct,
        price: Number(newProduct.price),
        quantity: Number(newProduct.quantity),
        sale: Number(newProduct.sale),
      },
    ]);
    setNewProduct({
      name: "",
      price: "",
      sale: "",
      quantity: "",
      img: null,
    });
    toggleModal();
  };

  const location = useLocation();

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Tekshirmoqchi bo'lgan vazifangizni tanlang</h2>

      <nav className="d-flex justify-content-center gap-3 mb-4">
        <Link to="/card">
          <Button color="primary">Card</Button>
        </Link>
        <Link to="/player">
          <Button color="success">Player</Button>
        </Link>
        {/* <Link to="/counter">
          <Button color="warning">Counter</Button>
        </Link> */}
      </nav>

      {location.pathname === "/card" && (
        <div className="text-center mb-3">
          <Button color="info" onClick={toggleModal}>
            Add Product
          </Button>
        </div>
      )}

      <Routes>
        <Route path="/" element={<Navigate to="/player" />} />
        <Route
          path="/card"
          element={
            <div className="row">
              {products.map((item) => (
                <div className="col-md-4 mb-3" key={item.id}>
                  <Card item={item} />
                </div>
              ))}
            </div>
          }
        />
        <Route path="/player" element={<Players />} />
        {/* <Route path="/counter" element={<Counter />} /> */}
        <Route
          path="*"
          element={<div className="text-center">Faqat 2 ta vazifa mavjud</div>}
        />
      </Routes>

      <Modal isOpen={modalOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Add New Product</ModalHeader>
        <Form onSubmit={handleAddProduct}>
          <ModalBody>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                type="text"
                name="name"
                id="name"
                value={newProduct.name}
                onChange={handleInputChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="price">Price</Label>
              <Input
                type="number"
                name="price"
                id="price"
                value={newProduct.price}
                onChange={handleInputChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="sale">Sale (%)</Label>
              <Input
                type="number"
                name="sale"
                id="sale"
                value={newProduct.sale}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="quantity">Quantity</Label>
              <Input
                type="number"
                name="quantity"
                id="quantity"
                value={newProduct.quantity}
                onChange={handleInputChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="img">Image</Label>
              <Input
                type="file"
                name="img"
                id="img"
                accept="image/*"
                onChange={handleImageChange}
              />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" type="submit">
              Add Product
            </Button>
            <Button color="secondary" onClick={toggleModal}>
              Cancel
            </Button>
          </ModalFooter>
        </Form>
      </Modal>
    </div>
  );
};

const WrappedApp = () => (
  <Router>
    <App />
  </Router>
);

export default WrappedApp;
