import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";

import "./AllProducts.css";
import ProductCard from "../../components/ui/card";

export default function AllProducts() {
  const [categoriesWithBrands, setCategoriesWithBrands] = useState({});
  const productsByCategory = useLoaderData(); // Get products for selected category from the loader
  const navigate = useNavigate();
  const { category } = useParams(); // Get the category from URL

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
      <section className="all-products py-5 px-4">
        <Container className="m-0 p-0">
          <Row>
            <Col md="3" className="d-none d-lg-block">
              {Object.keys(categoriesWithBrands).map((category, index) => (
                <Row key={index} className="mb-5">
                  <h5
                    className="fw-bold"
                    onClick={() => navigate(`/${category}`)} // Navigate to the selected category
                  >
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
            <Col lg="9">
              {/* Display products for the selected category */}
              <h4>
                {category &&
                  category.charAt(0).toUpperCase() + category.slice(1)}
              </h4>
              <Row>
                {productsByCategory.map((product) => (
                  <Col
                    key={product.id}
                    xs="6"
                    sm="4"
                    md="3"
                    className="mb-4 text-center"
                  >
                    <ProductCard
                      id={product.id}
                      key={product.id}
                      title={product.title}
                      price={product.price}
                      imageUrl={product.thumbnail}
                      link={product.link}
                    />
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export const CategoriesLoader = async ({ params }) => {
  const { category } = params; // Get the category from the route params

  try {
    // Fetch products for the selected category
    const response = await axios.get(
      `https://dummyjson.com/products/category/${category}`
    );
    return response.data.products; // Return products for the loader
  } catch (error) {
    console.error("Error fetching products for category:", error.message);
    return [];
  }
};
