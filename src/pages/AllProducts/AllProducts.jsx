import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import "./AllProducts.css";

export default function AllProducts() {
  const [categoriesWithBrands, setCategoriesWithBrands] = useState({});

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        const categoriesBrandsMap = {};

        response.data.products.forEach((product) => {
          const { category, brand } = product;

          if (!categoriesBrandsMap[category]) {
            categoriesBrandsMap[category] = {};
          }

          if (!categoriesBrandsMap[category][brand]) {
            categoriesBrandsMap[category][brand] = [];
          }

          categoriesBrandsMap[category][brand].push(product);
        });

        setCategoriesWithBrands(categoriesBrandsMap);
      } catch (error) {
        console.error("Error fetching products:", error.message);
      }
    };
    fetchProducts();
  }, []);

  return (
    <>
      <section className="all-products py-5 px-4" dir="rtl">
        <Container className="m-0 p-0">
          <Row>
            <Col md="3" className="d-none d-md-block">
              {Object.keys(categoriesWithBrands).map((category, index) => (
                <Row key={index} className="mb-5">
                  <h5 className="fw-bold">
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </h5>
                  {Object.keys(categoriesWithBrands[category]).map(
                    (brand, brandIndex) => (
                      <div key={brandIndex}>
                        <p className="fw-bold text-muted p-0 my-1">
                          <a
                            href="#"
                            className="text-decoration-none text-muted "
                          >
                            {!brand || brand === "undefined"
                              ? "No brand"
                              : brand}
                          </a>
                        </p>
                      </div>
                    )
                  )}
                </Row>
              ))}
            </Col>
            <Col md="9">{/* Add your code here weam */}</Col>
          </Row>
        </Container>
      </section>
    </> 
  );
}
