
import React from 'react';
import { Container, Row, Col, Form, ListGroup } from 'react-bootstrap';
import './locationMain.css'; // Import custom styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faNavicon, faMap, faSearch, faLocationCrosshairs } from '@fortawesome/free-solid-svg-icons';
import Button from'react-bootstrap/Button';
const StoreSearch = () => {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <h4><strong>محلاتنا</strong></h4>
                    <br />
                    <h4><strong>البحث عن المحلات</strong></h4>
                    <hr />
                </Col>
            </Row>

            <Row className="search-bar">
            <Col xs={1} md={1} className='red'>
                <FontAwesomeIcon icon={faLocationCrosshairs} className="me-2 red" />
                    <a href="/your-target-url" style={{ border: 'none' }}>
                        المحلات القريبة مني
                    </a>
                </Col>
                <Col xs={2} md={2}>
                    <p>
                        <FontAwesomeIcon icon={faSearch} className="me-2" />
                        <strong>البحث عن أقرب المحلات إليك</strong>
                    </p>
                </Col>
                <Col xs={4} md={4}>

                    <Form.Control type="text" placeholder="ابحث عن أقرب المحلات إليك"   >    
                    {/* <FontAwesomeIcon icon={faSearch} className="me-2" /> */}
                      </Form.Control>
                      {/* <Button variant="outline-primary" className="p-0 me-2 "> */}
            <FontAwesomeIcon icon={faSearch} className="me-2" />
        {/* </Button> */}
                </Col>
               
                <Col xs={2} md={2} className="hover-col">
                    <a href="/your-target-url" style={{ border: 'none' }}>
                        <FontAwesomeIcon icon={faNavicon} className="me-2" />
                        عرض الخريطه
                    </a>
                </Col>
                <Col xs={2} md={2} className="hover-col">
                    <a href="/your-target-url" style={{ border: 'none' }}>
                        <FontAwesomeIcon icon={faMap} className="me-2" />
                        عرض القائمة
                    </a>
                </Col>
              
            </Row>
            <hr />
            <p><strong>اختر محل للاطلاع على</strong></p>
            <Row>
                <Col xs={12} md={5} className="sidebar">
                    <ListGroup variant="flush">
                        <ListGroup.Item className="letter-item">
                            <span className="letter-list">ك</span>
                            <a href="">كايرو فيستيفال سيتي</a>
                        </ListGroup.Item>
                        <ListGroup.Item className="letter-item">
                            <span className="letter-list">م</span>
                            <a href="">مول مصر، القاهرة</a>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col xs={12} md={5} className="sidebar">
                    <ListGroup variant="flush">
                        <ListGroup.Item className="letter-item">
                            <span className="letter-list">ا</span>
                            <a href="">اتش آند ام اوبن اير مدينتي</a>
                        </ListGroup.Item>
                        <ListGroup.Item className="letter-item">
                            <span className="letter-list">ب</span>
                            <a href="">بوينت 90، القاهرة</a>
                        </ListGroup.Item>
                        <ListGroup.Item className="letter-item">
                            <span className="letter-list">س</span>
                            <a href="">سيتي ستارز، القاهرة</a>
                            <br />
                            <a href="">سيتي سنتر ألماظة</a>
                            <br />
                            <a href="">سيتي سنتر، الإسكندرية</a>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    );
};

export default StoreSearch;
// import React, { useState } from 'react';
// import { Container, Row, Col, ListGroup, Form } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faNavicon, faMap, faSearch, faLocationDot } from '@fortawesome/free-solid-svg-icons';

// const StoreSearch = () => {
//     const [showMap, setShowMap] = useState(false); // State to control map visibility

//     const handleMapToggle = () => {
//         setShowMap(true); // Set to true to show the map
//     };

//     const handleBackToList = () => {
//         setShowMap(false); // Set to false to show the list again
//     };

//     return (
//         <Container fluid>
//             {showMap ? (
//                 // Only show the map when showMap is true
                
//                 <Row>
//                     <Col>
//                         <button onClick={handleBackToList}>رجوع إلى القائمة</button>
//                         <div className="embed-responsive embed-responsive-16by9 mt-4">
//                             <iframe
//                                 className="embed-responsive-item"
//                                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509198!2d144.9537353153164!3d-37.81627997975157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11f3b7%3A0x5045675218ceed30!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1616161616161!5m2!1sen!2sau"
//                                 width="100%"
//                                 height="450"
//                                 style={{ border: 0 }}
//                                 allowFullScreen=""
//                                 loading="lazy"
//                             ></iframe>
//                         </div>
//                     </Col>
//                 </Row>
//             ) : (
//                 // Show the rest of the content when showMap is false
//                 <>
//                     <Row>
//                         <Col>
//                             <h4><strong>محلاتنا</strong></h4>
//                             <br />
//                             <h4><strong>البحث عن المحلات</strong></h4>
//                             <hr />
//                         </Col>
//                     </Row>
//                     {/* Search Bar Section */}
//                     <Row className="search-bar">
//                         <Col xs={2} className="hover-col">
//                             <a
//                                 href="/your-target-url"
//                                 style={{ border: 'none' }}
//                             >
//                                 <FontAwesomeIcon icon={faNavicon} className="me-2" />
//                                 عرض القائمه
//                             </a>
//                         </Col>
//                         <Col xs={2} className="hover-col" onClick={handleMapToggle}>
//                             <a
//                                 href="#"
//                                 style={{ border: 'none' }}
//                             >
//                                 <FontAwesomeIcon icon={faMap} className="me-2" />
//                                 عرض الخريطه
//                             </a>
//                         </Col>
//                         <Col xs={4}>
//                             <Form.Control type="text" placeholder="ابحث عن أقرب المحلات إليك" />
//                         </Col>
//                         <Col xs={2}>
//                             <p>
//                                 <FontAwesomeIcon icon={faSearch} className="me-2" />
//                                 <strong>البحث عن أقرب المحلات إليك</strong>
//                             </p>
//                         </Col>
//                         <Col xs={1}>
//                             <FontAwesomeIcon icon={faLocationDot} className="me-2" />
//                             <a
//                                 href="/your-target-url"
//                                 style={{ border: 'none' }}
//                             >
//                                 المحلات القريبة مني
//                             </a>
//                         </Col>
//                     </Row>
//                     <hr />
//                     <p><strong>اختر محل للاطلاع على</strong></p>
//                     <Row>
//                         {/* Sidebar for Letters */}
//                         <Col xs={12} md={5} className="sidebar">
//                             <ListGroup variant="flush">
//                                 <ListGroup.Item className="letter-item">
//                                     <span className="letter-list"> ك</span>
//                                     <a href=""> كايرو فيستيفال سيتي</a>
//                                 </ListGroup.Item>
//                                 <ListGroup.Item className="letter-item">
//                                     <span className="letter-list"> م</span>
//                                     <a href=""> مول مصر، القاهرة </a>
//                                 </ListGroup.Item>
//                             </ListGroup>
//                         </Col>
//                         {/* Content Area: Shops */}
//                         <Col xs={12} md={5} className="sidebar">
//                             <ListGroup variant="flush">
//                                 <ListGroup.Item className="letter-item">
//                                     <span className="letter-list">ا </span>
//                                     <a href=""> اتش آند ام اوبن اير مدينتي</a>
//                                 </ListGroup.Item>
//                                 <ListGroup.Item className="letter-item">
//                                     <span className="letter-list"> ب</span>
//                                     <a href=""> بوينت 90، القاهرة </a>
//                                 </ListGroup.Item>
//                                 <ListGroup.Item className="letter-item">
//                                     <span className="letter-list"> س</span>
//                                     <a href="">
//                                         سيتي ستارز، القاهرة</a> <br />
//                                         <a href="">سيتي سنتر ألماظة</a><br />
//                                         <a href="">سيتي سنتر، الإسكندرية</a>
//                                 </ListGroup.Item>
//                             </ListGroup>
//                         </Col>
//                     </Row>
//                 </>
//             )}
//         </Container>
//     );
// };

// export default StoreSearch;
