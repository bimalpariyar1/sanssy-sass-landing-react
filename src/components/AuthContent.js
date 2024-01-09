import React from "react";
import { Link } from "react-router-dom";

const AuthContent = () => {
    return (
        <>
            <div>
                <img src="/images/auth01.png" alt="" />
            </div>

            <div className="col-logo my-4">
                <Link to="/">
                    <img src="/images/logo.svg" alt="" />
                </Link>
            </div>

            <div className="section-heading white mb-5">
                <h3>Spend less time planning.</h3>
                <p>Enjoy Frictionless Spend Management, Feel The Raw Naked business data Of The Road.</p>
            </div>
        </>
    );
};

export default AuthContent;
