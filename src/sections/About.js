import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import SectionHeading from "components/SectionHeading";
import IconBox from "components/IconBox";

// About Trusties Content
const trustiesData = [
    { id: 1, image: "/images/trustie-01.png" },
    { id: 2, image: "/images/trustie-02.png" },
    { id: 3, image: "/images/trustie-03.png" },
    { id: 4, image: "/images/trustie-04.png" },
    { id: 5, image: "/images/trustie-05.png" },
    { id: 6, image: "/images/trustie-06.png" },

    { id: 7, image: "/images/trustie-02.png" },
    { id: 8, image: "/images/trustie-03.png" },
];

// About Callout Boxes Content
const aboutCallsData = [
    {
        id: 1,
        icon: "las la-stream",
        title: "Navigate to app",
        desc: "Navigate to app. It's Everywhere You Wanna Be.",
        image: "/images/about-call-01.png",
    },
    {
        id: 2,
        icon: "las la-exchange-alt",
        title: "Register yourself",
        desc: "Nothing Works Better Than a Register yourself.",
        image: "/images/about-call-02.png",
    },
    {
        id: 3,
        icon: "las la-external-link-alt",
        title: "Enjoy the features",
        desc: "Probably The Best Enjoy the features In The World.",
        image: "/images/about-call-03.png",
    },
];

// Trusties Slider Component
const Trusties = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };
    return (
        <>
            <Slider {...settings}>
                {(trustiesData || []).map((item, index) => (
                    <div key={item.id}>
                        <div className="trustie-item">
                            <img src={item.image} alt={`trustie-${index}`} />
                        </div>
                    </div>
                ))}
            </Slider>
            <div className="text-center mt-4">
                Would You Provide Somebody Your Final Trusted by? Get the Entryway - It's Trusted by 500,00+.
                <br />
                Connect the other presently!
            </div>
        </>
    );
};

// About Callout Box Component
const AboutCallOut = ({ item }) => {
    return (
        <div className="about-callout-box px-4 pt-4">
            <IconBox headingVariant="h4" icon={item.icon} title={item.title} desc={item.desc} className="type-lg" />
            <div className="mt-4 callout-media">
                <img src={item.image} alt={item.title} />
            </div>
        </div>
    );
};

const About = () => {
    return (
        <section className="sp-t" id="about">
            <Container>
                <Row>
                    <Col lg={8} className="mx-auto">
                        {/* Section Heading */}
                        <div className="text-center mb-5">
                            <SectionHeading
                                title="Effortlessly manage and improve your daily tasks with ease like a charm"
                                desc="Praesent feugiat pellentesque vulputate turpis, ut semper metus pulv eget. Sed ac lectus vel nisi dictum luctus. Maecenas ero Sed ac lectus leoa pellentesque metus luctus."
                            />
                        </div>
                        {/* Section Heading */}
                    </Col>
                </Row>
                <Row>
                    {/* About Callout Boxes */}
                    {(aboutCallsData || []).map((item) => (
                        <Col lg={4} className="mb-lg-0 mb-4" key={item.id}>
                            <AboutCallOut item={item} />
                        </Col>
                    ))}
                    {/* About Callout Boxes */}
                </Row>

                <Row>
                    <Col md={12}>
                        {/* About Trusties Boxes */}
                        <div className="sp-t">
                            <Trusties />
                        </div>
                        {/* About Trusties Boxes */}
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;
