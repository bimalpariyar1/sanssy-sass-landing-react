import React from "react";

const StatBox = (props) => {
    const { num, desc } = props;
    return (
        <div className="stat-box">
            <div className="stat-num">{num}</div>
            <div className="stat-desc">{desc}</div>
        </div>
    );
};

export default StatBox;
