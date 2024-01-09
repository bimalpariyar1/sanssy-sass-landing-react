import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SectionHeading from "components/SectionHeading";
import { Link } from "react-router-dom";

const plansData = [
    {
        id: 1,
        type: "free",
        name: "Free Plan",
        link: "#",
        text: "Includes every feature you need to start selling online.",
        price: "0",
    },
    {
        id: 2,
        type: "paid",
        name: "Paid Plan",
        link: "#",
        text: "Unlock advanced featutres for growing your business.",
        price: "50",
    },
];

const PricingPlans = () => {
    return (
        <section className="sp-tb site-bg" id="pricing">
            <Container>
                <Row>
                    <Col lg={8} className="mx-auto">
                        {/* Section Heading */}
                        <div className="text-center white mb-5">
                            <SectionHeading
                                title="Start for free, upgrade at any time."
                                desc="Praesent feugiat pellentesque vulputate turpis, ut semper metus pulv eget. Sed ac lectus vel nisi dictum luctus. Maecenas ero Sed ac lectus leoa pellentesque metus luctus."
                            />
                        </div>
                        {/* Section Heading */}
                    </Col>
                </Row>
                <Row>
                    {/* Pricing Plans */}
                    {(plansData || []).map((item) => (
                        <Col lg={6} key={item.id} className="mb-4">
                            <div className={`pricing-plan p-4 ${item.type === "free" ? "dark-bg" : "paid"}`}>
                                <div className={`plan-detail ${item.type === "free" ? "white" : ""}`}>
                                    <div className="plan-head">
                                        <h3>{item.name}</h3>
                                        <p>{item.text}</p>
                                    </div>
                                    <div className="plan-price">${item.price}</div>
                                </div>
                                <div className="mt-5">
                                    <Link to="#" className="theme-btn primary">
                                        {item.type === "free" ? "Start for free" : "Let's get started"}
                                    </Link>
                                </div>
                            </div>
                        </Col>
                    ))}
                    {/* Pricing Plans */}

                    {/* Customize Plan */}
                    <Col>
                        <div className="customize-plan px-4 pt-4">
                            <div className="plan-detail mb-4">
                                <h3>Customize your Plan</h3>
                                <p>
                                    Pleaes contact our support to make your worn plan. Praesent feugiat pellentesque
                                    vulputate turpis, ut semper metus pulv eget.
                                </p>

                                <div className="mt-5">
                                    <Link to="#" className="theme-btn primary">
                                        Contact Support
                                    </Link>
                                </div>
                            </div>
                            <div className="plan-customize-image-wrap">
                                <img src="/images/customize-plan.png" alt="" />
                            </div>
                        </div>
                    </Col>
                    {/* Customize Plan */}
                </Row>
            </Container>
        </section>
    );
};

export default PricingPlans;
