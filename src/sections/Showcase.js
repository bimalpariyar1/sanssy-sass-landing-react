import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SectionHeading from "components/SectionHeading";
import { Link } from "react-router-dom";

const Showcase = () => {
    return (
        <section className="sp-tb site-bg showcase">
            <Container>
                <Row className="align-items-center">
                    <Col lg={6}>
                        <div className="showcase-content mb-5">
                            {/* Section Heading */}
                            <div className="white mb-5">
                                <SectionHeading
                                    title="Where Can You Find Resources to Manage Your Daily Tasks?"
                                    desc="Praesent feugiat pellentesque vulputate turpis, ut semper metus pulv eget. Sed ac lectus vel nisi dictum luctus. Maecenas ero Sed ac lectus leoa pellentesque metus luctus."
                                />
                            </div>
                            {/* Section Heading */}

                            {/* Showcase Content */}
                            <div className="check-list">
                                <ul>
                                    <li>
                                        <span className="me-3">
                                            <i className="las la-check"></i>
                                        </span>
                                        App Analytics Service
                                    </li>
                                    <li>
                                        <span className="me-3">
                                            <i className="las la-check"></i>
                                        </span>
                                        Completely Bug Free App
                                    </li>
                                    <li>
                                        <span className="me-3">
                                            <i className="las la-check"></i>
                                        </span>
                                        Most Relevant Platform
                                    </li>
                                </ul>
                            </div>

                            <div className="showcase-ctas mt-5">
                                <Link to="#" className="theme-btn white me-4">
                                    Get A Demo
                                </Link>
                                <Link to="#" className="theme-btn white outline">
                                    View Pricing
                                </Link>
                            </div>
                            {/* Showcase Content */}
                        </div>
                    </Col>
                    <Col>
                        {/* Showcase Main Image */}
                        <div className="showcase-dashboard-showcase">
                            <img src="/images/showcase.png" alt="" />
                        </div>
                        {/* Showcase Main Image */}
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Showcase;
