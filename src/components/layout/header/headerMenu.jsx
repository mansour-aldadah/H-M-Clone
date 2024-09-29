
// import React, { useState } from 'react';
// import { Navbar, Nav, Container, Form, FormControl } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { FaHeart, FaShoppingBag, FaSearch } from 'react-icons/fa'; // Importing icons from react-icons
// import './headerMenu.css'; // Import your custom CSS file
// // import HM from '../../../assets/images/logos/HM.png';

// const HeaderMenu = () => {
//   const [activeLink, setActiveLink] = useState(null); // State to track the active link

//   const handleNavLinkClick = (link) => {
//     setActiveLink(link); // Set the active link when a nav link is clicked
//   };

//   return (
//     <>
//       <Navbar bg="light" expand="lg" className="p-0">
//         <Container fluid className="d-flex align-items-center justify-content-between">
//           <Nav className="d-flex align-items-center">
//             <Nav.Link href="#favorites" className="p-0">
//               <FaHeart size={24} />
//             </Nav.Link>
//             <Nav.Link href="#shopping-bag" className="p-0">
//               <FaShoppingBag size={24} />
//             </Nav.Link>
//           </Nav>

//           <Navbar.Brand className="mx-auto">
//             <img src={"Hm"} alt="Logo1" style={{ height: "40px" }} />
//           </Navbar.Brand>

//           <Form className="d-flex align-items-center">
//             <FaSearch />
//             <FormControl
//               type="search"
//               placeholder="ماذا تبحث؟"
//               className="me-2 form-control shadow-none border-0"
//               aria-label="Search"
//               onChange={(e) => console.log(e.target.value)} // for logging purposes only
//             />
//           </Form>
//         </Container>
//       </Navbar>
//       <Navbar bg="light" expand="lg">
//         <Container>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="me-auto justify-content-center w-100">
//               {['sale', 'sport', 'h-m-home', 'children', 'baby', 'men', 'women'].map((item) => (
//                 <Nav.Link 
//                   key={item} 
//                   href={`#${item}`} 
//                   onClick={() => handleNavLinkClick(item)} // Set active link on click
//                   className="nav-link-hover" // Add a class for hover effect
//                 >
//                   {item === 'sale' ? 'تنزيلات' : item === 'sport' ? 'الملابس الرياضيه' : item === 'h-m-home' ? 'اتش اند ام هوم' : item === 'children' ? 'الاطفال' : item === 'baby' ? 'الرضع' : item === 'men' ? 'الرجال' : 'النساء'}
//                 </Nav.Link>
//               ))}
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//       {/* Display an empty div under the active link */}
//       {activeLink && (
//         <div style={{ height: '1000px', backgroundColor: '#f8f9fa' }}>
//           {/* You can customize the style or content of this div */}
//         </div>
//       )}
//     </>
//   );
// };

// export default HeaderMenu;
import React, { useState } from 'react';
import { Navbar, Nav, Container, Form, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaHeart, FaShoppingBag, FaSearch } from 'react-icons/fa';
import SearchPage from './searchPage';
import './headerMenu.css';
import HM from '../../../assets/images/logos/HM.png';

const HeaderMenu = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [expanded, setExpanded] = useState(false);
  const [showSearchPage, setShowSearchPage] = useState(false); 

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
      <Navbar expanded={expanded} bg="light" expand="lg" className="p-0">
        <Container fluid className="d-flex align-items-center justify-content-between">
           {/* Replace Form with search icon for mobile/tablet
           <div className="d-flex align-items-center">
            <FaSearch size={24} onClick={handleSearchClick} style={{ cursor: 'pointer' }} />
          </div>
         */}
          <Form className="d-flex align-items-center">
          <FormControl
              type="search"
              placeholder="عن ماذا تبحث؟  "  
              className="me-2 form-control shadow-none border-0"
              aria-label="Search"
              onChange={(e) => console.log(e.target.value)} // for logging purposes only  

            />                   <FaSearch  onClick={handleSearchClick}/>

          </Form>
          <Navbar.Brand className="mx-auto">
            <img src={HM} alt="Logo1" style={{ height: "40px" }} />
          </Navbar.Brand>

         
          <Nav className="d-flex align-items-center">
            <Nav.Link href="#favorites" className="p-0">
              <FaHeart size={24} />
            </Nav.Link>
            <Nav.Link href="#shopping-bag" className="p-0">
              <FaShoppingBag size={24} />
            </Nav.Link>
            <Nav.Link href="#login" className="p-0">
            </Nav.Link>
          </Nav>

        </Container>
      </Navbar>

      <Navbar expanded={expanded} bg="light" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleNavbar} />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto justify-content-center w-100 flex-column flex-lg-row">
              {['sale', 'sport', 'h-m-home', 'children', 'baby', 'men', 'women'].map((item) => (
                <Nav.Link 
                  key={item} 
                  href={`#${item}`} 
                  onClick={() => handleNavLinkClick(item)}
                  className="nav-link-hover"
                >
                  {item === 'sale' ? 'تنزيلات' : item === 'sport' ? 'الملابس الرياضيه' : item === 'h-m-home' ? 'اتش اند ام هوم' : item === 'children' ? 'الاطفال' : item === 'baby' ? 'الرضع' : item === 'men' ? 'الرجال' : 'النساء'}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {activeLink && (
        <div style={{ height: '1000px', backgroundColor: '#f8f9fa' }}>
        </div>
      )}
    </>
  );
};

export default HeaderMenu;
