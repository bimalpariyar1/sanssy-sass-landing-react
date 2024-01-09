import React from "react";
import { Link } from "react-router-dom";

const LoginForm = (props) => {
    const { otherSignIn, submit } = props;

    const renderOtherSignIn = (
        <>
            <div className="my-5 form-divider">
                <span className="p-3">OR</span>
            </div>
            <div className="social-auth">
                <Link to="#" className="google-btn mb-3">
                    <img src="/images/google-btn.svg" alt="" />
                    <span>Login with Google</span>
                </Link>
                <Link to="#" className="fb-btn">
                    <img src="/images/fb-btn.svg" alt="" />
                    <span>Login with Facebook</span>
                </Link>
            </div>
        </>
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        submit({
            valueone: "valueone",
        });
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <input type="text" placeholder="Email" />
                </div>
                <div className="mb-3">
                    <input type="password" placeholder="Password" />
                </div>
                <div className="text-end mb-3">
                    <Link to="#">Forgot Password?</Link>
                </div>
                <div className="auth-form-submit">
                    <button className="theme-btn primary" type="submit">
                        Login
                    </button>
                </div>
            </form>

            {otherSignIn ? renderOtherSignIn : null}
        </>
    );
};

export default LoginForm;
