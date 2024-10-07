import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container, Form, FormControl } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaHeart, FaShoppingBag, FaSearch } from "react-icons/fa";
import SearchPage from "./searchPage";
import "./headerMenu.css";
import HM from "../../../assets/images/logos/HM.png";
import axios from "axios";
import { useLoaderData, useNavigate } from "react-router-dom";

const HeaderMenu = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [expanded, setExpanded] = useState(false);
  const [showSearchPage, setShowSearchPage] = useState(false);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  const CategoriesLoader = useLoaderData();
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        setProducts(response.data.products);

        // Extract unique categories
        const allCategories = response.data.products.map(
          (product) => product.category
        );
        const uniqueCategories = [...new Set(allCategories)]; // Use Set to get unique categories
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Error fetching products:", error.message);
      }
    };

    fetchProducts();
  }, []);

  const handleNavLinkClick = (link) => {
    setActiveLink(link);
    setExpanded(false);
  };

  const toggleNavbar = () => {
    setExpanded(!expanded);
  };

  const handleSearchClick = () => {
    setShowSearchPage(true);
  };

  const handleBackClick = () => {
    setShowSearchPage(false);
  };

  if (showSearchPage) {
    return <SearchPage onBack={handleBackClick} />;
  }

  return (
    <>
      <section className="headerMenu">
        <Navbar expanded={expanded} bg="light" expand="lg" className="p-0">
          <Container
            fluid
            className="d-flex align-items-center justify-content-between"
          >
            <Form className="d-flex align-items-center">
              <FormControl
                type="search"
                placeholder="عن ماذا تبحث؟  "
                className="me-2 form-control shadow-none border-0"
                aria-label="Search"
                onChange={(e) => console.log(e.target.value)} // for logging purposes only
              />{" "}
              <FaSearch onClick={handleSearchClick} />
            </Form>
            <Navbar.Brand className="mx-auto">
              <img
                src={HM}
                className="logo1"
                alt="Logo1"
                style={{ height: "40px" }}
              />
            </Navbar.Brand>

            <Nav className="d-flex align-items-center">
              <Nav.Link href="#favorites" className="p-0">
                <FaHeart size={24} />
              </Nav.Link>
              <Nav.Link href="#shopping-bag" className="p-0">
                <FaShoppingBag size={24} />
              </Nav.Link>
              <Nav.Link href="#login" className="p-0"></Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <Navbar expanded={expanded} bg="light" expand="lg">
          <Container>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              onClick={toggleNavbar}
            />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto justify-content-center w-100 flex-column flex-lg-row">
                {categories.map((category) => (
                  <Nav.Link
                    key={category}
                    onClick={() => navigate(`/${category}`)}
                    className="nav-link-hover"
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </Nav.Link>
                ))}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {activeLink && (
          <div style={{ height: "1000px", backgroundColor: "#f8f9fa" }}></div>
        )}
      </section>
    </>
  );
};

export default HeaderMenu;
