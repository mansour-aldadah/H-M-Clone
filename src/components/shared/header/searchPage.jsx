import React from 'react';
import { Button, Form, Container } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';

const SearchPage = ({ onBack }) => {
  return (
    <Container className="d-flex flex-column align-items-center">
      <Button variant="link" onClick={onBack} className="mt-3">
        <FaArrowLeft size={24} /> العودة
      </Button>
      <h2 className="mt-4">البحث</h2>
      <Form className="mt-3 w-75">
        <Form.Control
          type="search"
          placeholder="ماذا تبحث؟"
          aria-label="Search"
        />
      </Form>
    </Container>
  );
};

export default SearchPage;
