import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SectionHeading from "components/SectionHeading";

const faqsData = [
    {
        id: 1,
        icon: "las la-hand-holding-usd",
        question: "Integrate With The Tools You Know And Love?",
        answer: "Cum sociis natoque penatibus et magnis dis parturient mont, nascetur ridiculus mus. Donec quam felis ultricies nec pelle ntesque eu pretium quis sem.",
    },
    {
        id: 2,
        icon: "las la-parachute-box",
        question: "Really Simple Pricing Choose as your need with usages?",
        answer: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.",
    },
    {
        id: 3,
        icon: "las la-smile",
        question: "Updates Blog & News To Keep You Updated?",
        answer: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    },
    {
        id: 4,
        icon: "las la-chess-queen",
        question: "Simple, Yet Powerful Features?",
        answer: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam nisi ut aliquid ex ea commodi consequatur.",
    },
];

const Faqs = () => {
    return (
        <section className="sp-b">
            <Container>
                <Row>
                    <Col lg={8} className="mx-auto">
                        {/* Section Heading */}
                        <div className="text-center mb-5">
                            <SectionHeading
                                title="Frequently asked question you might need"
                                desc="Praesent feugiat pellentesque vulputate turpis, ut semper metus pulv eget. Sed ac lectus vel nisi dictum luctus. Maecenas ero Sed ac lectus leoa pellentesque metus luctus."
                            />
                        </div>
                        {/* Section Heading */}
                    </Col>
                </Row>
                <Row>
                    {/* Faqs */}
                    <Col lg={10} className="mx-auto">
                        <Row>
                            {(faqsData || []).map((item) => (
                                <Col key={item.id} lg={6}>
                                    <div className="faq-wrap mb-5">
                                        <div className="faq-icon">
                                            <i className={item.icon}></i>
                                        </div>
                                        <div className="faq-content ms-4">
                                            <h4>{item.question}</h4>
                                            <p>{item.answer}</p>
                                        </div>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                    {/* Faqs */}
                </Row>
            </Container>
        </section>
    );
};

export default Faqs;
