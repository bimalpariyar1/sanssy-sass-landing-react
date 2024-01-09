import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AuthContent from "../components/AuthContent";

const AuthLayout = (props) => {
    const { children } = props;
    return (
        <main>
            <section className="auth-wrapper">
                <Container>
                    <Row>
                        <Col md={12} className="mx-auto">
                            <Row className="align-items-center">
                                <Col xl={6} className="d-none d-xl-block">
                                    <div className="auth-column-content">
                                        <AuthContent />
                                    </div>
                                </Col>
                                <Col xl={6}>
                                    <div className="auth-column-content">{children}</div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
        </main>
    );
};

export default AuthLayout;
