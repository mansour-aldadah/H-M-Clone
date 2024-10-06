import React, { useState } from "react";
import axios from "axios";
import { Form, Button, Alert, Container } from "react-bootstrap";

function Auth() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      // Fetch products data from the API
      const res = await axios.get("https://dummyjson.com/products");
      const products = res.data.products;

      // Check if any product matches the username and password
      const product = products.find(
        (product) =>
          product.id.toString() === username && product.title === password
      );

      if (product) {
        setSuccess("Login successful!");
      } else {
        setError("Invalid username or password");
      }
    } catch (err) {
      setError("Error fetching data from API");
    }
  };

  return (
    <Container>
      <h2 className="my-4 text-center">Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Username (Product ID)</Form.Label>
          <Form.Control
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username (Product ID)"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password (Product Title)</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password (Product Title)"
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>

      {error && <Alert className="mt-3" variant="danger">{error}</Alert>}
      {success && <Alert className="mt-3" variant="success">{success}</Alert>}
    </Container>
  );
}

export default Auth;
