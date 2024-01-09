import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

const RegisterForm = (props) => {
    const { otherSignIn, submit } = props;

    const [termsChecked, setTermsChecked] = useState(false);

    const hiddenTermsCheckbox = useRef(null);

    const renderOtherSignIn = (
        <>
            <div className="my-5 form-divider">
                <span className="p-3">OR</span>
            </div>
            <div className="social-auth">
                <Link to="#" className="google-btn mb-3">
                    <img src="/images/google-btn.svg" alt="" />
                    <span>Continue with Google</span>
                </Link>
                <Link to="#" className="fb-btn">
                    <img src="/images/fb-btn.svg" alt="" />
                    <span>Continue with Facebook</span>
                </Link>
            </div>
        </>
    );

    const handleTermsClick = () => {
        hiddenTermsCheckbox.current.click();
    };

    const handleTermsCheckChange = (e) => {
        setTermsChecked(e.target.checked);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        submit();
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <input type="text" placeholder="Name" />
                </div>
                <div className="mb-3">
                    <input type="text" placeholder="Email" />
                </div>
                <div className="mb-3">
                    <input type="password" autoComplete="off" placeholder="Password" />
                </div>
                <div className="mb-3">
                    <input type="password" autoComplete="off" placeholder="Confirm Password" />
                </div>
                <div className="text-end mb-3">
                    <Link to="#">Forgot Password?</Link>
                </div>

                <div className="register-terms mb-3">
                    <span className={`terms-check me-2 ${termsChecked ? "checked" : ""}`} onClick={handleTermsClick}>
                        <i className="las la-check"></i>
                    </span>
                    <span>
                        I agree to our
                        <strong>
                            <Link to="#"> Terms of Services</Link>
                        </strong>
                    </span>
                    <input
                        type="checkbox"
                        ref={hiddenTermsCheckbox}
                        onChange={handleTermsCheckChange}
                        checked={termsChecked}
                    />
                </div>
                <div className="auth-form-submit">
                    <button className="theme-btn primary" type="submit">
                        Register
                    </button>
                </div>
            </form>

            {otherSignIn ? renderOtherSignIn : null}
        </>
    );
};

export default RegisterForm;
