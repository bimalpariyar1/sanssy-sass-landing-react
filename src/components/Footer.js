import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const footerMenus = [
    {
        id: 1,
        menuType: "Main Pages",
        links: [
            { id: 1, link: "#", title: "Home" },
            { id: 2, link: "#", title: "About" },
            { id: 3, link: "#", title: "Blog" },
            { id: 4, link: "#", title: "Career" },
            { id: 5, link: "#", title: "Pricing" },
            { id: 6, link: "#", title: "Integration" },
            { id: 7, link: "#", title: "Book Demo" },
        ],
    },
    {
        id: 2,
        menuType: "CMS Pages",
        links: [
            { id: 1, link: "#", title: "Blog Single" },
            { id: 2, link: "#", title: "Career Single" },
            { id: 3, link: "#", title: "Integration Single" },
            { id: 4, link: "#", title: "Pricing Ecommerce" },
            { id: 5, link: "#", title: "Contact" },
            { id: 6, link: "#", title: "Download" },
        ],
    },
    {
        id: 3,
        menuType: "Utility Pages",
        links: [
            { id: 1, link: "#", title: "Documentation" },
            { id: 2, link: "#", title: "Developers Only" },
            { id: 3, link: "#", title: "Terms & Conditions" },
            { id: 4, link: "#", title: "Privacy Policy" },
            { id: 5, link: "#", title: "Quick Integrations" },
            { id: 6, link: "#", title: "Code Quality" },
        ],
    },
    {
        id: 4,
        menuType: "Follow us",
        links: [
            { id: 1, link: "#", title: "Facebook" },
            { id: 2, link: "#", title: "Twitter" },
            { id: 3, link: "#", title: "Linkedin" },
            { id: 4, link: "#", title: "Skype" },
            { id: 5, link: "#", title: "Instagram" },
        ],
    },
];

const FooterLinks = (props) => {
    const { links } = props;
    return (
        <div className="footer-links">
            <ul>
                {(links || []).map((link) => (
                    <li key={link.id}>
                        <Link to={link.link}>{link.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const Footer = () => {
    const logoImage = "/images/logo.svg";

    return (
        <footer className="sp-b">
            <Container>
                <Row>
                    <Col lg={4}>
                        {/* Newsletter Subscription form */}
                        <div className="site-bg footer-infos p-sm-5 p-4 mb-lg-0 mb-4">
                            <div className="footer-info">
                                <div className="footer-logo">
                                    <Link to="#">
                                        <img src={logoImage} alt="Footer Logo" />
                                    </Link>
                                </div>
                                <div className="py-4 text-white">
                                    Make the world a better place with Sanssy Software. Hurry up and buy now!
                                </div>
                            </div>

                            <div className="newsletter">
                                <div className="section-heading white">
                                    <h5>Subscribe To Our Newsletter</h5>
                                </div>
                                <div className="newsletter-form">
                                    <div className="mb-4">
                                        <input type="text" placeholder="Email Address.." />
                                    </div>
                                    <div>
                                        <button className="theme-btn primary white w-100">Subscribe</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Newsletter Subscription form */}
                    </Col>

                    {/* Footer Menus */}
                    {(footerMenus || []).map((menu) => (
                        <Col key={menu.id} lg={2} className="col-sm-6 mb-lg-0 mb-5">
                            <div className="footer-menu">
                                <div className="mb-4">
                                    <h5>{menu.menuType}</h5>
                                </div>
                                <FooterLinks links={menu.links} />
                            </div>
                        </Col>
                    ))}
                    {/* Footer Menus */}
                </Row>

                {/* Copyright text */}
                <div className="copy-right text-center mt-5 pt-5">
                    Copyright 2023 Sanssy | Created by bimal-themes Powered by - Ui8
                </div>
                {/* Copyright text */}
            </Container>
        </footer>
    );
};

export default Footer;
