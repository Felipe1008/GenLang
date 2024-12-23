import React from "react";
import NavbarButton from "./NavbarButton";

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: "#3e3e3e", padding: "0" }}>
      {/* Faixa escura para o título */}
      <div
        style={{
          backgroundColor: "#2e2e2e",
          padding: "10px 0",
          textAlign: "center",
          borderBottom: "2px solid #1e1e1e", // Traço de separação
        }}
      >
        <h1 style={{ color: "white", fontFamily: "cursive", margin: 0 }}>GenLang</h1>
      </div>

      {/* Faixa com os botões */}
      <div style={{ display: "flex", justifyContent: "center", gap: "15px", padding: "10px 0" }}>
        {["Baralhos", "Painel", "Adicionar", "Criar Baralho"].map((text, index) => (
          <NavbarButton key={index} text={text} />
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
