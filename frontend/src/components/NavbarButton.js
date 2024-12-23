import React from "react";

const NavbarButton = ({ text }) => {
  return (
    <button
      style={{
        backgroundColor: "transparent",
        color: "white",
        border: "none",
        cursor: "pointer",
        fontSize: "16px",
        textDecoration: "none", // Inicialmente sem sublinhado
      }}
      onMouseEnter={(e) => (e.target.style.textDecoration = "underline")} // Adiciona sublinhado
      onMouseLeave={(e) => (e.target.style.textDecoration = "none")} // Remove sublinhado
    >
      {text}
    </button>
  );
};

export default NavbarButton;
