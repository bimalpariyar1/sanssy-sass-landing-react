import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SectionHeading from "./SectionHeading";

const InnerBanner = (props) => {
    const { title, desc } = props;
    return (
        <section className="inner-banner site-bg">
            <Container>
                <Row>
                    <Col lg={8} className="mx-auto">
                        <div className="text-center py-5 white">
                            <SectionHeading
                                title={title ? title : "Title goes Here"}
                                desc={desc ? desc : "Description goes here"}
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default InnerBanner;
