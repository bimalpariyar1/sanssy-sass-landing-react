import React from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "layout/AuthLayout";
import LoginForm from "./components/LoginForm";
import { Link } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const formSubmit = (values) => {
        navigate("/");
    };
    return (
        <AuthLayout>
            {/* Auth Heading Logo*/}
            <div className="col-logo mb-5">
                <Link to="/">
                    <img src="/images/color-logo.svg" alt="" />
                </Link>
            </div>
            {/* Auth Heading Logo*/}
            <div className="mb-4">
                {/* Section Heading */}
                <div className="section-heading">
                    <h3>Login to your account</h3>
                    <p>Creating an account can make you learn and grow quickly</p>
                </div>
                {/* Section Heading */}
            </div>
            {/* Login Form */}
            <LoginForm otherSignIn submit={formSubmit} />
            {/* Login Form */}
            <div className="mt-5">
                Don't have an account?
                <Link to="/auth/register"> Register</Link>
            </div>
        </AuthLayout>
    );
};

export default Login;
