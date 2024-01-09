import React, { useState } from "react";

const ContactForm = () => {
    const [formValues, setFormValues] = useState({
        fullName: "",
        email: "",
        phoneNumber: "",
        subject: "",
        messageText: "",
    });

    const handleInputChange = (e) => {
        setFormValues((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value,
            };
        });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        console.log("Form Values ==>", formValues);

        setFormValues({
            fullName: "",
            email: "",
            phoneNumber: "",
            subject: "",
            messageText: "",
        });
    };

    return (
        <div className="contact-form">
            <form onSubmit={handleFormSubmit}>
                <div className="form-field">
                    <div className="num me-4">01</div>
                    <div className="mb-4 input-field">
                        <label>
                            <h5>What is your name?</h5>
                        </label>
                        <input
                            type="text"
                            name="fullName"
                            placeholder="Your Full Name"
                            value={formValues.fullName}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div className="form-field">
                    <div className="num me-4">02</div>
                    <div className="mb-4 input-field">
                        <label>
                            <h5>What is your email address?</h5>
                        </label>
                        <input
                            type="text"
                            name="email"
                            placeholder="Your Email Address"
                            value={formValues.email}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div className="form-field">
                    <div className="num me-4">03</div>
                    <div className="mb-4 input-field">
                        <label>
                            <h5>What is your phone number?</h5>
                        </label>
                        <input
                            type="text"
                            name="phoneNumber"
                            placeholder="Your Phone Number"
                            value={formValues.phoneNumber}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div className="form-field">
                    <div className="num me-4">04</div>
                    <div className="mb-4 input-field">
                        <label>
                            <h5>Tell us the subject?</h5>
                        </label>
                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            value={formValues.subject}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div className="form-field">
                    <div className="num me-4">05</div>
                    <div className="mb-4 input-field">
                        <label>
                            <h5>Please write you message or queries?</h5>
                        </label>
                        <textarea
                            name="messageText"
                            placeholder="Your Message or Queries"
                            value={formValues.messageText}
                            onChange={handleInputChange}></textarea>
                    </div>
                </div>

                <div className="mt-4">
                    <button className="theme-btn primary">Send Message</button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
