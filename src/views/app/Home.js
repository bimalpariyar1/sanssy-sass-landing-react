import React from "react";
import AppLayout from "layout/AppLayout";
import About from "sections/About";
import BlogsSection from "sections/BlogsSection";
import Contact from "sections/Contact";
import Faqs from "sections/Faqs";
import Features from "sections/Features";
import Integrations from "sections/Integrations";
import PricingPlans from "sections/PricingPlans";
import Showcase from "sections/Showcase";
import SiteBanner from "sections/SiteBanner";
import Solutions from "sections/Solutions";
import Testimonials from "sections/Testimonials";

const Home = () => {
    return (
        <main>
            <AppLayout>
                <SiteBanner />
                <About />
                <Features />
                <Showcase />
                <Solutions />
                <Testimonials />
                <PricingPlans />
                <BlogsSection />
                <Faqs />
                <Integrations />
                <Contact />
            </AppLayout>
        </main>
    );
};

export default Home;
