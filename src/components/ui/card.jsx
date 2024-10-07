import React from "react";
import { Card } from "react-bootstrap";
import "./card.css";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ title, price, imageUrl, id }) => {
  const navigate = useNavigate();

  return (
    <Card
      className="p-0 m-0 border-0 shadow-sm rounded-0"
      onClick={() => navigate(`/products/${id}`)}
    >
      <a>
        <Card.Img
          style={{ maxHeight: "100%" }}
          variant="top"
          src={imageUrl}
          alt={title}
        />
      </a>
      <Card.Body style={{ height: "7rem" }}>
        <Card.Title className="fw-normal single-line-ellipsis">
          {title}
        </Card.Title>
        <p className="fw-bold">${price}</p>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
