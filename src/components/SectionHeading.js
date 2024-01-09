import React from "react";

const SectionHeading = (props) => {
    const { title, desc, className } = props;
    return (
        <div className={`section-heading ${className ? className : ""}`}>
            <h2 dangerouslySetInnerHTML={{ __html: title }}></h2>
            <p dangerouslySetInnerHTML={{ __html: desc }}></p>
        </div>
    );
};

export default SectionHeading;
