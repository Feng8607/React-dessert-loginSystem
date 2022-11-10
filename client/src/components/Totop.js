import React from "react";
import { useState, useEffect } from "react";
const BacktotopButton = () => {
  const [backtotopButton, SetbacktotopButton] = useState(false);

  const scrollUp = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      let heightToHidden = 250;

      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;

      if (winScroll > heightToHidden) {
        SetbacktotopButton(true);
      } else {
        SetbacktotopButton(false);
      }
    });
  }, []);

  return (
    <div className="scrollup">
      {backtotopButton && (
        <button className="top" onClick={scrollUp}>
          TOP
        </button>
      )}
    </div>
  );
};

export default BacktotopButton;
