import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SectionHeading from "components/SectionHeading";
import { Link } from "react-router-dom";

const integrationsList = [
    { id: 1, title: "Slack", image: "/images/Slack.png" },
    { id: 2, title: "Soundcloud", image: "/images/Soundcloud.png" },
    { id: 3, title: "StackoverFlow", image: "/images/StackoverFlow.png" },
    { id: 4, title: "Telegram", image: "/images/Telegram.png" },
    { id: 5, title: "Tinder", image: "/images/Tinder.png" },
    { id: 6, title: "Yelp", image: "/images/Yelp.png" },
];

const Integrations = () => {
    return (
        <section className="sp-tb site-bg">
            <Container>
                <Row className="align-items-center">
                    {/* Integration main Image */}
                    <Col lg={5} className="mx-auto">
                        <img src="/images/integrate-main.png" alt="" />
                    </Col>
                    {/* Integration main Image*/}

                    {/* Integration Content */}
                    <Col lg={7}>
                        <div className="integrations-content mb-lg-0 mt-5">
                            <div className="white mb-5">
                                {/* Section Heading */}
                                <SectionHeading
                                    title="Integrate With The Tools<br>You Know And Love"
                                    desc="When It Absolutely, Positively Has To Be Integrate with the tools Overnight.<br>Smart. Beautiful. Integrate with the tools."
                                />
                                {/* Section Heading */}
                            </div>

                            {/* Integrations Lists */}
                            <div className="intregrates-logos pb-5">
                                {(integrationsList || []).map((item) => (
                                    <div key={item.id} className="integrate-logo">
                                        <img src={item.image} alt={item.title} />
                                    </div>
                                ))}
                            </div>
                            {/* Integrations Lists */}

                            {/* Integrations Ctas */}
                            <div className="integrate-ctas">
                                <Link to="#" className="theme-btn primary white">
                                    Get a demo
                                </Link>
                                <Link to="#" className="theme-btn primary white outline">
                                    View pricing
                                </Link>
                            </div>
                        </div>
                        {/* Integrations Ctas */}
                    </Col>
                    {/* Integration Content */}
                </Row>
            </Container>
        </section>
    );
};

export default Integrations;
