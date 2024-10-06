import React, { useEffect } from "react";
import "./NotFound.css";
import { Container, Carousel, Button, Row, Col } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import ProductCard from "../../components/ui/card";
import { useContext } from "react";
import langContext from "../../services/context/langContext";
import StringManager from "../../resources/stringManager";

export default function NotFound() {
  const [products, setProducts] = useState([]);
  const [lang, setLang] = useContext(langContext);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        setProducts(response.data.products);
      } catch (error) {
        console.error("Error fetching products:", error.message);
      }
    };
    fetchProducts();
  }, []);

  const groupedProducts = () => {
    const groupSize = isMobile ? 3 : 4;
    const result = [];
    for (let i = 0; i < products.length; i += groupSize) {
      result.push(products.slice(i, i + groupSize));
    }
    return result;
  };
  return (
    <section className="not-found text-center">
      <Container className="">
        <h5>
          {lang == "ar"
            ? StringManager.notFoundTitle.ar
            : StringManager.notFoundTitle.en}
        </h5>
        <h3 className="mb-4 mt-3">
          {lang == "ar"
            ? StringManager.notFoundSubTitle.ar
            : StringManager.notFoundSubTitle.en}
        </h3>
        <Carousel
          className="p-1 p-sm-5"
          interval={null}
          wrap={false}
          multi={true}
        >
          {groupedProducts().map((productGroup, index) => (
            <Carousel.Item key={index}>
              <div className="d-flex">
                <Row>
                  {productGroup.map((product) => (
                    <Col>
                      <ProductCard
                        key={product.id}
                        title={product.title}
                        price={product.price}
                        imageUrl={product.thumbnail}
                        link={product.link}
                      />
                    </Col>
                  ))}
                </Row>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>
  );
}
