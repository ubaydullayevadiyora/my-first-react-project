// src/components/AddProductModal.jsx
import React from "react";
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

const AddProductModal = ({
  isOpen,
  toggle,
  newProduct,
  handleInputChange,
  handleImageChange,
  handleAddProduct,
}) => {
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>Add New Product</ModalHeader>
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
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Form>
    </Modal>
  );
};

export default AddProductModal;
