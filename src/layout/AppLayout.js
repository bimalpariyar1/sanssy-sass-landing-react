import BackToTop from "components/Back-To-Top";
import Footer from "components/Footer";
import Header from "components/Header";
import React from "react";

const AppLayout = (props) => {
    const { children } = props;
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
            <BackToTop />
        </>
    );
};

export default AppLayout;
