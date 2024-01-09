import React from "react";

const BoxHeading = (props) => {
    const { headingVariant, text } = props;
    return React.createElement(`${headingVariant}`, { className: "" }, text);
};

const IconBox = (props) => {
    const { headingVariant, icon, title, desc, className } = props;

    const boxClass = className ? `iconbox ${className}` : "iconbox";
    return (
        <div className={boxClass}>
            <div className="box-icon me-4">
                <i className={icon}></i>
            </div>
            <div className="box-content">
                {title ? <BoxHeading headingVariant={headingVariant ? headingVariant : "h4"} text={title} /> : null}

                {desc ? <p dangerouslySetInnerHTML={{ __html: desc }}></p> : null}
            </div>
        </div>
    );
};

export default IconBox;
