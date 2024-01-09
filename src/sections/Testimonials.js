import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";

import SectionHeading from "components/SectionHeading";

const testiData = [
    {
        id: 1,
        name: "Shane Catson",
        info: "CEO, Capital SEO",
        companyImage: "/images/Yelp.png",
        image: "/images/testi-01.png",
        rating: "5.0",
        testiText:
            "We're moving to this integration of biomedicine, information technology, wireless and mobile now - an era of digital medicine. Even my stethoscope is now digital. And of course, there's an app for that.",
    },
    {
        id: 2,
        name: "Chris Wort",
        info: "Designer, Focus Lab",
        companyImage: "/images/Tinder.png",
        image: "/images/testi-02.png",
        rating: "4.5",
        testiText:
            "The First Industrial Revolution used water and steam power to mechanize production. The Second used electric power to create mass production. The Third used electronics and information technology to automate production.",
    },
    {
        id: 3,
        name: "Jane Aniston",
        info: "QA Engineer, Creative Agency",
        image: "/images/testi-03.png",
        companyImage: "/images/Telegram.png",
        rating: "4.0",
        testiText:
            "The number one benefit of information technology is that it empowers people to do what they want to do. It lets people be creative. It lets people be productive. It lets people learn things they didn't think they could learn before, and so in a sense it is all about potential.",
    },
];

const Testimonials = () => {
    const [imageSlider, setImageSlider] = useState();
    const [textSlider, setTextSlider] = useState();

    return (
        <section className="sp-tb" id="testimonials">
            <Container>
                <Row>
                    <Col lg={8} className="mx-auto">
                        {/* Section Heading */}
                        <div className="text-center mb-5">
                            <SectionHeading
                                title="People who already love us, what they are saying about us"
                                desc="Praesent feugiat pellentesque vulputate turpis, ut semper metus pulv eget. Sed ac lectus vel nisi dictum luctus. Maecenas ero Sed ac lectus leoa pellentesque metus luctus."
                            />
                        </div>
                        {/* Section Heading */}
                    </Col>
                </Row>

                <Row className="align-items-center">
                    {/* Testimonie Image Slider */}
                    <Col lg={5}>
                        <Slider
                            fade={true}
                            swipeToSlide={true}
                            focusOnSelect={true}
                            asNavFor={textSlider}
                            arrows={false}
                            ref={(slider1) => setImageSlider(slider1)}>
                            {(testiData || []).map((item) => (
                                <div key={item.id} className="testi-image-wrap">
                                    <img src={item.image} alt={item.name} />
                                    <div className="rating-box p-4">
                                        <div className="rating-num">
                                            <div className="num">{item.rating}</div>
                                            <div>Rating</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </Col>
                    {/* Testimonie Image Slider */}

                    {/* Testimonie Text Slider */}
                    <Col lg={7}>
                        <div className="testimonials-wrap mt-lg-0 mt-4">
                            <div className="testimonial-icon">
                                <i className="las la-quote-left"></i>
                            </div>
                            <Slider
                                asNavFor={imageSlider}
                                arrows={false}
                                ref={(slider2) => setTextSlider(slider2)}
                                dots={true}>
                                {(testiData || []).map((item) => (
                                    <div key={item.id}>
                                        <div className="testimonie-text my-4">“{item.testiText}”</div>
                                        <div className="testimonie-meta d-flex align-items-center">
                                            <div className="avatar">
                                                <img src={item.companyImage} alt={item.name} />
                                            </div>
                                            <div className="infos ms-4">
                                                <strong>{item.name}</strong>
                                                <br />
                                                <span>{item.info}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </Col>
                    {/* Testimonie Text Slider */}
                </Row>
            </Container>
        </section>
    );
};

export default Testimonials;
