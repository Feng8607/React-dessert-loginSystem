import React from "react";
import { useState, useEffect } from "react";
const BacktotopButton = () => {
  const [, SetbacktotopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.screenY > 100) {
        SetbacktotopButton(true);
      } else {
        SetbacktotopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="scrollup">
      {BacktotopButton && (
        <button className="top" onClick={scrollUp}>
          TOP
        </button>
      )}
    </div>
  );
};

export default BacktotopButton;
