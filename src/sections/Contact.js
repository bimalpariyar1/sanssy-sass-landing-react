import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SectionHeading from "components/SectionHeading";
import ContactForm from "components/ContactForm";

const Contact = () => {
    return (
        <section className="sp-tb" id="contact">
            <Container>
                <Row>
                    <Col lg={4}>
                        {/* Section Heading */}
                        <div className="mb-5">
                            <SectionHeading
                                title="Get in touch today!"
                                desc="Lorem ipsum dolor sit amet consectetur adipiscing elit eque ipsum odio justo amet urna."
                            />
                        </div>
                        {/* Section Heading */}

                        {/* Contact Informations */}
                        <div className="mb-5">
                            <div className="mb-4">Address</div>
                            <h4>
                                90 Fairground Rd St.
                                <br />
                                FL 3290
                                <br />
                                United States
                            </h4>
                        </div>
                        <div className="mb-5">
                            <div className="mb-4">Email</div>
                            <h4>
                                hello@sanssy.co
                                <br />
                                career@sanssy.co
                            </h4>
                        </div>
                        <div className="mb-5">
                            <div className="mb-4">Phone</div>
                            <h4>+62 235 26554</h4>
                        </div>
                        {/* Contact Informations */}
                    </Col>

                    <Col lg={8}>
                        {/* Contact Form */}
                        <div className="contact-form-wrap">
                            <div className="mb-5">
                                Tell us about your self and what you think about us
                                <br />
                                And we will get back to you.
                            </div>
                            <ContactForm />
                        </div>
                        {/* Contact Form */}
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Contact;
