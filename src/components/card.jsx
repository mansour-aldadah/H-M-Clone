import { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";

function ProductCard() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => setProducts(res.data.products))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Row className="col-lg-10 col-md-12 m-auto">
        {products.map((product) => (
          <Col key={product.id} sm={12} md={6} lg={4} xl={3} className="mb-4">
            <Card className=" p-0 m-0  border-0">
              <Card.Img
                style={{ maxHeight: "100%" }}
                variant="top"
                src={product.thumbnail}
              />

              <Card.Body style={{ height: "7rem" }}>
                <Card.Title className="fs-6">{product.title}</Card.Title>
                <Card.Text>
                  <p>{product.price}</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default ProductCard;
