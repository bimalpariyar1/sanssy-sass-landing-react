import React, { useState, useEffect } from "react";

const BackToTop = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      handleScroll();
    });

    const handleScroll = () => {
      if (
        document.body.scrollTop >= 800 ||
        document.documentElement.scrollTop >= 800
      ) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  if (!showBackToTop) {
    return;
  }

  return (
    <div className="back-to-top" onClick={scrollToTop}>
      <div className="icon-top">
        <i className="las la-arrow-circle-up"></i>
      </div>
      <div className="top-text">Top</div>
    </div>
  );
};

export default BackToTop;
