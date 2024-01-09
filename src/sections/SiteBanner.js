import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

// Icon Checkbox Content
const checksData = [
    { id: 1, text: "Secured Data" },
    { id: 2, text: "Smart Notification" },
    { id: 3, text: "Highly Customizable" },
];

// Icon Checkbox Component
const IconCheck = ({ item }) => {
    return (
        <div className="checks">
            <span className="check-icon me-3">
                <i className="las la-check"></i>
            </span>
            <h4>{item.text}</h4>
        </div>
    );
};

const SiteBanner = () => {
    return (
        <section className="site-banner site-bg" id="home">
            <Container>
                <Row>
                    <Col lg={11} className="mx-auto">
                        <div className="banner-content">
                            {/* Banner Heading */}
                            <div className="banner-heading text-center white">
                                <h1>The Simple, Secure, and Scalable Way to Run Your Business</h1>
                                <p>
                                    Enjoy Frictinless Time Management with our Online Time Management
                                    <br />
                                    System and Get Up To 100% Chash Back.
                                </p>
                            </div>
                            {/* Banner Heading */}

                            {/* Call To Action Buttons */}
                            <div className="banner-ctas my-5">
                                <Link to="/auth/register" className="theme-btn white">
                                    Get A Demo
                                </Link>
                                <Link to="#" className="theme-btn white outline">
                                    View Pricing
                                </Link>
                            </div>
                            {/* Call To Action Buttons */}

                            {/* Check Icons List */}
                            <div className="banner-checks mb-5 d-none d-xl-flex">
                                {(checksData || []).map((item) => (
                                    <IconCheck key={item.id} item={item} />
                                ))}
                            </div>
                            {/* Check Icons List */}

                            {/* Banner Main Image */}
                            <div className="banner-image">
                                <img src="/images/banner-image.png" alt="" />
                            </div>
                            {/* Banner Main Image */}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default SiteBanner;
