import React, { useRef, useState } from "react";
import AuthLayout from "../../layout/AuthLayout";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { Spinner } from "react-bootstrap";
import RegisterForm from "./components/RegisterForm";

const fakeUpload = (file) => {
    return new Promise((resolve) => {
        if (file) {
            setTimeout(() => {
                const reader = new FileReader();
                reader.readAsDataURL(file);

                resolve(reader);
            }, 1000);
        }
    });
};

const Register = () => {
    const navigate = useNavigate();
    const [image, setImage] = useState("");
    const [uploading, setUploading] = useState(false);

    const hiddenFileInput = useRef(null);

    const handleUploadClick = () => {
        hiddenFileInput.current.click();
    };

    const handleUploadChange = (e) => {
        const file = e.target.files[0];

        setUploading(true);
        setImage("");

        //Fake Upload Simulation
        fakeUpload(file).then((reader) => {
            reader.onload = () => {
                setImage(reader.result);
                setUploading(false);
            };
        });
    };

    const formSubmit = (values) => {
        console.log(values);

        navigate("/auth/login");
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
            <div className="register-heading mb-4">
                {/* Section Heading */}
                <div className="section-heading">
                    <h3>
                        Register for an
                        <br />
                        account
                    </h3>
                    <p>Creating an account can make you learn and grow quickly</p>
                </div>
                {/* Section Heading */}

                {/* User Profile Image */}
                <div className="upload-profile-image ms-4" onClick={handleUploadClick}>
                    {image !== "" ? (
                        <img src={image} alt="" />
                    ) : (
                        <div className="upload-indicator">
                            {uploading ? <Spinner animation="border" /> : <i className="las la-image"></i>}
                        </div>
                    )}

                    <div className="button-upload">
                        <i className="las la-plus"></i>
                    </div>

                    <input type="file" onChange={handleUploadChange} ref={hiddenFileInput} />
                </div>
                {/* User Profile Image */}
            </div>

            {/* Registration Form */}
            <div className="register-form">
                <RegisterForm otherSignIn submit={formSubmit} />
            </div>
            {/* Registration Form */}

            <div className="mt-5">
                Already have an account?
                <Link to="/auth/login"> Login</Link>
            </div>
        </AuthLayout>
    );
};

export default Register;
