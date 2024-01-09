import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SectionHeading from "components/SectionHeading";
import IconBox from "components/IconBox";
import StatBox from "components/StatBox";

const featureOneData = [
    {
        id: 1,
        icon: "las la-stream",
        title: "Business Data",
        desc: "Feel The Raw Naked business data Of The Road.",
    },
    {
        id: 2,
        icon: "las la-exchange-alt",
        title: "Amazing Resources",
        desc: "Amazing resources quality you can see.",
    },
];

const stateData = [
    { id: 1, num: "52%", desc: "Reduction in inventory holding costs management." },
    { id: 2, num: "100K+", desc: "Ensuring shorter queues and happier customers." },
];

const Features = () => {
    return (
        <section className="sp-tb partial-bg" id="features">
            <div>
                <Container>
                    <Row className="align-items-center">
                        {/* Feature Content */}
                        <Col lg={6}>
                            <div className="feature-main feture-content mb-lg-0 mb-4">
                                <div className="mb-4">
                                    <SectionHeading
                                        title="Check out our amazingly crafted features"
                                        desc="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."
                                    />
                                </div>
                                {(featureOneData || []).map((item, i) => (
                                    <IconBox
                                        key={item.id}
                                        icon={item.icon}
                                        title={item.title}
                                        desc={item.desc}
                                        className={`${i < featureOneData.length - 1 ? "py-4" : "pt-4"}`}
                                    />
                                ))}
                            </div>
                        </Col>
                        {/* Feature Content */}

                        {/* Feature Image */}
                        <Col lg={6}>
                            <img src="/images/feature-exp.png" alt="" />
                        </Col>
                        {/* Feature Image */}
                    </Row>
                </Container>
            </div>
            <div className="sp-t">
                <Container>
                    <Row className="align-items-center">
                        {/* Feature Image */}
                        <Col lg={6}>
                            <img src="/images/feature-exp2.png" alt="" />
                        </Col>
                        {/* Feature Image */}

                        {/* Feature Content */}
                        <Col lg={6}>
                            <div className="feature-main feture-content mt-lg-0 mt-4">
                                <div className="mb-4">
                                    <SectionHeading
                                        title="Real time Sales status monitoring."
                                        desc="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."
                                    />
                                </div>

                                <div className="features-stats">
                                    <Row>
                                        {(stateData || []).map((item) => (
                                            <Col xl={6} key={item.id} className="mb-4 mb-xl-0">
                                                <StatBox num={item.num} desc={item.desc} />
                                            </Col>
                                        ))}
                                    </Row>
                                </div>
                            </div>
                        </Col>
                        {/* Feature Content */}
                    </Row>
                </Container>
            </div>
        </section>
    );
};

export default Features;
