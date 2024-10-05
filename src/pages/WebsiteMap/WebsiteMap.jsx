import React, { useEffect, useState } from "react";
import "./WebsiteMap.css";
import { Col, Container, Row } from "react-bootstrap";
import axios from "axios";

export default function WebsiteMap() {
  const [categoriesWithBrands, setCategoriesWithBrands] = useState({});

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        const categoriesBrandsMap = {};

        // Group products by category and brand
        response.data.products.forEach((product) => {
          const { category, brand } = product;

          // If the category doesn't exist, create an empty object
          if (!categoriesBrandsMap[category]) {
            categoriesBrandsMap[category] = {};
          }

          // If the brand doesn't exist under the category, create an empty array
          if (!categoriesBrandsMap[category][brand]) {
            categoriesBrandsMap[category][brand] = [];
          }

          // Add the product to the brand under the category
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
      <section className="website-map py-5 px-4" dir="rtl">
        <Container>
          <h3 className="p-0 m-0">خريطة الموقع</h3>
          <hr className="mt-2" />
          {Object.keys(categoriesWithBrands).map((category, index) => (
            <Row key={index} className="mb-5">
              <Col sm="3">
                <h4>{category.charAt(0).toUpperCase() + category.slice(1)}</h4>
              </Col>

              <Col sm="9" className="text-center">
                <Row className="text-start gap-md-3">
                  {Object.keys(categoriesWithBrands[category]).map(
                    (brand, brandIndex) => (
                      <Col sm="4" md="2" key={brandIndex}>
                        <div className="mb-4">
                          <h5>
                            {!brand || brand === "undefined"
                              ? "No brand"
                              : brand}
                          </h5>
                          {categoriesWithBrands[category][brand].map(
                            (product) => (
                              <p className="fw-normal" key={product.id}>
                                {product.title}
                              </p>
                            )
                          )}
                        </div>
                      </Col>
                    )
                  )}
                </Row>
              </Col>
            </Row>
          ))}
        </Container>
      </section>
    </>
  );
}
