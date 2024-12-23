import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

const DeckPage = () => {
  const { deckName } = useParams(); // Pega o nome do baralho da URL

  return (
    <div>
      <Navbar title={deckName} showCreateButton={false} />
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h2 style={{ fontFamily: "cursive" }}>{deckName}</h2>
        <p>Bem-vindo ao baralho "{deckName}"!</p>
        {/* Adicione mais funcionalidades aqui */}
      </div>
    </div>
  );
};

export default DeckPage;
