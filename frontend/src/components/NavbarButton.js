import React from "react";
import { useNavigate } from "react-router-dom";

const NavbarButton = ({ label, onClick, path }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (path) {
      navigate(path);
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <button
      onClick={handleClick}
      style={{
        background: "none",
        border: "none",
        color: "white",
        cursor: "pointer",
        fontSize: "16px",
        fontWeight: "bold",
        margin: "0 15px",
      }}
      onMouseEnter={(e) => (e.target.style.textDecoration = "underline")}
      onMouseLeave={(e) => (e.target.style.textDecoration = "none")}
    >
      {label}
    </button>
  );
};

export default NavbarButton;
