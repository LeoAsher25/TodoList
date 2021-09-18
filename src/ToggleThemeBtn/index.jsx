import React, { useRef, useEffect } from "react";
import "./ToggleThemeBtn.scss";

const ToggleThemeBtn = (props) => {
  const { toggleTheme, isLightTheme, bgColorBtn } = props;

  const ToggleThemeRef = useRef(null);

  const handleToggleTheme = () => {
    ToggleThemeRef.current.classList.toggle("active");
    toggleTheme();
  };

  useEffect(() => {
    if (!isLightTheme) {
      ToggleThemeRef.current.classList.add("active");
    }
  }, [isLightTheme]);

  return (
    <div
      ref={ToggleThemeRef}
      htmlFor="dn"
      className="toggle"
      onClick={() => handleToggleTheme()}
      style={{ backgroundColor: bgColorBtn }}
    >
      <div className="toggle__handler">
        <span className="crater crater--1"></span>
        <span className="crater crater--2"></span>
        <span className="crater crater--3"></span>
      </div>
      <span className="star star--1"></span>
      <span className="star star--2"></span>
      <span className="star star--3"></span>
      <span className="star star--4"></span>
      <span className="star star--5"></span>
      <span className="star star--6"></span>
    </div>
  );
};

export default ToggleThemeBtn;
