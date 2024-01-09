import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/app/Home";
import Login from "./views/auth/Login";
import Register from "./views/auth/Register";
import Blogs from "views/app/Blogs";
import BlogDetails from "views/app/BlogDetails";
import ScrollTop from "components/ScrollTop";
import Preloader from "components/Preloader";

function App() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);
    return (
        <>
            {loading ? <Preloader /> : null}
            <Router>
                <ScrollTop>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="auth">
                            <Route path="login" index element={<Login />} />
                            <Route path="register" index element={<Register />} />
                        </Route>
                        <Route path="blogs" element={<Blogs />} />
                        <Route path="blogs/details" element={<BlogDetails />} />
                    </Routes>
                </ScrollTop>
            </Router>
        </>
    );
}

export default App;
