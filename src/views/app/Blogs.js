import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AppLayout from "layout/AppLayout";
import InnerBanner from "components/InnerBanner";
import SingleBlogArticle from "components/SingleBlogArticle";

const postsData = [
    {
        id: 1,
        image: "/images/post-01.png",
        categories: "Marketing, Creative",
        title: "Top 6 Membership Sites for beginners",
        date: "September 28 2023",
    },
    {
        id: 2,
        image: "/images/post-02.png",
        categories: "Tutorials Ui/Ux Design",
        title: "How to become a web designer in 2022",
        date: "September 23 2023",
    },
    {
        id: 3,
        image: "/images/post-03.png",
        categories: "Resources Tutorials",
        title: "20 best affiliate programs for online creators in 2022",
        date: "September 18 2023",
    },
    {
        id: 4,
        image: "/images/post-04.png",
        categories: "Marketing, Creative",
        title: "Top 6 Membership Sites for beginners",
        date: "September 28 2023",
    },
    {
        id: 5,
        image: "/images/post-05.png",
        categories: "Tutorials Ui/Ux Design",
        title: "How to become a web designer in 2022",
        date: "September 23 2023",
    },
    {
        id: 6,
        image: "/images/post-06.png",
        categories: "Resources Tutorials",
        title: "20 best affiliate programs for online creators in 2022",
        date: "September 18 2023",
    },
];

const Blogs = () => {
    return (
        <AppLayout>
            <section className="inner-page">
                {/* Inner Page Banner */}
                <InnerBanner
                    title="Updated Blog & News To Keep You Updated"
                    desc="Enjoy Frictionless Spend Management with Tract-Pay Credit Card Bills Online & Get Up To 100% Cash Back"
                />
                {/* Inner Page Banner */}

                {/* Blogs Page Blog Listing */}
                <div className="blogs-list sp-tb">
                    <Container>
                        {/* Single Blog */}
                        <Row>
                            {(postsData || []).map((item) => (
                                <Col lg={4} key={item.id} className="mb-5">
                                    <SingleBlogArticle item={item} />
                                </Col>
                            ))}
                        </Row>
                        {/* Single Blog */}

                        {/* Load More */}
                        <div className="load-blogs">
                            <button className="theme-btn primary">Load more</button>
                        </div>
                        {/* Load More */}
                    </Container>
                </div>
                {/* Blogs Page Blog Listing */}
            </section>
        </AppLayout>
    );
};

export default Blogs;
