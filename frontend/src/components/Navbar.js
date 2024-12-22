import React from "react";

const Navbar = () => {
  return (
    <nav style={{display:"grid", backgroundColor: "#2e2e2e", padding:"2px 2px"}}>
      <h1 style={{display: "flex", justifyContent:"center", color:"white", fontFamily:"cursive"}}>GenLang</h1>
      <div style={{display: "flex", justifyContent: "center", color:"white"}}>
        <button style={{ margin: "20px 20px 10px 0px", backgroundColor:"transparent", color:"white" }}>Baralho</button>
        <button style={{ margin: "20px 20px 10px 0px", backgroundColor:"transparent", color:"white" }}>Adicionar</button>
        <button style={{ margin: "20px 20px 10px 0px", backgroundColor:"transparent", color:"white" }}>Painel</button>
      </div>
    </nav>
  );
};

export default Navbar;
