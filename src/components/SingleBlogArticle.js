import React from "react";
import { Link } from "react-router-dom";

const SingleBlogArticle = (props) => {
    const { item } = props;
    return (
        <div className="blog-article">
            <div className="blog-thumb-image">
                <Link to="/blogs/details">
                    <img src={item.image} alt="" />
                </Link>
            </div>
            <div className="blog-meta">
                <div className="blog-categories mt-4">{item.categories}</div>
                <div className="blog-title mt-2 mb-4">
                    <h4>
                        <Link to="/blogs/details">{item.title}</Link>
                    </h4>
                </div>
                <div className="date">{item.date}</div>
            </div>
        </div>
    );
};

export default SingleBlogArticle;
