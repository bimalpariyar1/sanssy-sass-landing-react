import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import SectionHeading from "components/SectionHeading";
import { Link } from "react-router-dom";
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
];

const BlogsSection = () => {
    return (
        <section className="sp-tb" id="blogs">
            <Container>
                <Row>
                    <Col lg={8} className="mx-auto">
                        {/* Section Heading */}
                        <div className="text-center mb-5">
                            <SectionHeading
                                title="Updated Blog & News To Keep You Updated"
                                desc="Praesent feugiat pellentesque vulputate turpis, ut semper metus pulv eget. Sed ac lectus vel nisi dictum luctus. Maecenas ero Sed ac lectus leoa pellentesque metus luctus."
                            />
                        </div>
                        {/* Section Heading */}
                    </Col>
                </Row>

                <Row>
                    {/* Blog Posts */}
                    {(postsData || []).map((item) => (
                        <Col lg={4} key={item.id} className="mb-lg-0 mb-4">
                            <SingleBlogArticle item={item} />
                        </Col>
                    ))}
                    {/* Blog Posts */}
                </Row>

                {/* View More Blogs Link */}
                <div className="more-blog mx-auto mt-5">
                    <div className="link-wrap p-4">
                        <span className="more-blog-text">Want to explore more of your blogs?</span>
                        <Link to="/blogs" className="theme-btn primary ms-4">
                            View all blogs
                        </Link>
                    </div>
                </div>
                {/* View More Blogs Link */}
            </Container>
        </section>
    );
};

export default BlogsSection;
