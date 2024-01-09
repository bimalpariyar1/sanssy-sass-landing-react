import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AppLayout from "layout/AppLayout";
import InnerBanner from "components/InnerBanner";

const blogComments = [
    {
        id: 1,
        userImage: "/images/thumb-11.jpg",
        firstName: "John",
        lastName: "Doe",
        commentText:
            "I have bought over 10 stufs from this seller ...wor ...what a service ...they have size and customize my suits to a perfetct and elegancy.",
        isSelf: false,
        reply: [
            {
                id: 3,
                userImage: "/images/thumb-15.jpg",
                firstName: "Jane",
                lastName: "Williams",
                commentText: "...they have size and customize my suits to a perfetct and elegancy",
                isSelf: false,
                reply: [],
            },
        ],
    },
    {
        id: 2,
        // userImage: "/images/thumb-6.jpg",
        userImage: "",
        firstName: "Adam",
        lastName: "Smith",
        commentText: "...wor ...what a service ...they have size and customize my suits to a perfetct and elegancy.",
        isSelf: true,
    },
];

const PostComment = (props) => {
    const [comment, setComment] = useState({
        firstName: "",
        lastName: "",
        commentText: "",
    });

    const handleChange = (e) => {
        setComment((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value,
            };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Comment ==>", { ...comment });

        setComment({
            firstName: "",
            lastName: "",
            commentText: "",
        });
    };

    return (
        <div className="post-comment-form-wrap mb-5">
            <div className="mb-4">
                <h5>Add Your Comment</h5>
            </div>
            <form onSubmit={handleSubmit}>
                <Row>
                    <Col lg={6} className="mb-4">
                        <input
                            type="text"
                            placeholder="First Name"
                            name="firstName"
                            value={comment.firstName}
                            onChange={handleChange}
                        />
                    </Col>
                    <Col lg={6} className="mb-4">
                        <input
                            type="text"
                            placeholder="Last Name"
                            name="lastName"
                            value={comment.lastName}
                            onChange={handleChange}
                        />
                    </Col>
                    <Col lg={12} className="mb-4">
                        <textarea
                            placeholder="Your Comment..."
                            name="commentText"
                            value={comment.commentText}
                            onChange={handleChange}></textarea>
                    </Col>
                    <Col lg={12} className="mb-4">
                        <button className="theme-btn primary">Post Comment</button>
                    </Col>
                </Row>
            </form>
        </div>
    );
};

const CommentItem = (props) => {
    const {
        comment: { userImage, firstName, lastName, commentText, reply, isSelf },
    } = props;

    return (
        <div className="comment-single">
            <div className="user-image me-3">
                {userImage === "" ? (
                    <div className="user-name-char">{firstName.charAt(0)}</div>
                ) : (
                    <img src={userImage} alt="" />
                )}
            </div>
            <div className="comment-texts-wrap">
                <div className="user-meta pb-3">
                    <h6>
                        {firstName} {lastName}
                    </h6>
                    <div className="comment-text mt-1">{commentText}</div>
                    <div className="comment-actions">
                        <div className="date">08-08-2022</div>
                        <div>|</div>
                        <div className="action-link">Reply</div>
                        {isSelf ? (
                            <>
                                <div>|</div>
                                <div className="action-link">Delete</div>
                            </>
                        ) : null}
                        <div>|</div>
                        <div className="action-link">
                            <i className="las la-heart"></i>
                        </div>
                    </div>
                </div>

                {reply?.length > 0 &&
                    reply.map((item) => <CommentItem key={item.id} comment={item} className="reply-comment" />)}
            </div>
        </div>
    );
};

const BlogDetails = () => {
    return (
        <AppLayout>
            <section className="inner-page">
                {/* Inner Page Banner */}
                <InnerBanner
                    title="How to become a web designer in 2022"
                    desc="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."
                />
                {/* Inner Page Banner */}

                {/* Blog Detail Conetnt */}
                <div className="sp-tb">
                    <Container>
                        <Row>
                            <Col lg={8} className="mx-auto">
                                <div className="blogs-detail">
                                    <div className="main-imag">
                                        <img src="/images/post-detail-01.png" alt="" />
                                    </div>
                                    <div className="blog-detail-meta my-5 text-center">
                                        <div>Tutorials Ui/Ux Design</div>
                                        <div>March 19, 2023</div>
                                    </div>
                                    <div className="general-text">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                                            ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
                                            parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
                                            pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec
                                            pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,
                                            rhoncus ut, imperdiet a, venenatis vitae, justo.
                                        </p>
                                    </div>
                                    <div className="general-text mt-5">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                                            ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
                                            parturient montes, nascetur ridiculus.
                                        </p>
                                    </div>
                                    <div className="quote-text site-bg white text-center p-5 my-5">
                                        <h3>
                                            Grow wealth like a tree, roots in savings, branches reaching towards diverse
                                            investments.
                                        </h3>
                                        <div className="text-center">
                                            <strong>James Bond</strong> Founder
                                        </div>
                                    </div>
                                    <div className="general-text mb-5">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                                            ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
                                            parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
                                            pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec
                                            pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,
                                            rhoncus ut, imperdiet a, venenatis vitae, justo.
                                        </p>
                                    </div>

                                    <div className="blog-images-group">
                                        <div className="fr3">
                                            <img src="/images/post-detail-02.png" alt="" />
                                        </div>
                                        <div className="fr1">
                                            <img src="/images/post-detail-03.png" alt="" />
                                        </div>
                                    </div>

                                    <div className="general-text my-5">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                                            ligula eget dolor. Aenean massa. Vulputate eget, arcu. In enim justo,
                                            rhoncus ut, imperdiet a, venenatis vitae, justo. Aenean massa. Vulputate
                                            eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
                                        </p>
                                    </div>

                                    <div className="content-list">
                                        <h4>Consectetuer adipiscing elit</h4>
                                        <ul>
                                            <li>Nascetur ridiculus mus. Donec quam felis, ultricies nec</li>
                                            <li>Vulputate eget, arcu. In enim justo, rhoncus ut</li>
                                            <li>Nulla consequat massa quis enim. Donec pede justo.</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="blog-comments mt-5">
                                    {/* Blog Comments */}
                                    <div>
                                        <PostComment />
                                    </div>
                                    <div className="comments-list">
                                        {(blogComments || []).map((item) => (
                                            <CommentItem key={item.id} comment={item} />
                                        ))}
                                    </div>
                                    {/* Blog Comments */}
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                {/* Blog Detail Conetnt */}
            </section>
        </AppLayout>
    );
};

export default BlogDetails;
