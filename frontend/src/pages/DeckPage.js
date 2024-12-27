import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const DeckPage = ({ decks }) => {
  const { deckName } = useParams();
  const navigate = useNavigate();
  const deck = decks.find((d) => d.name === deckName);

  const handleStartStudy = () => {
    navigate(`/deck/${deckName}/study`);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh", // Ajusta a altura para preencher a tela
        textAlign: "center",
        padding: "20px",
      }}
    >
      {deck ? (
        <div>
          <h2
            style={{
              fontFamily: "cursive",
              fontSize: "1.5rem",
              marginBottom: "20px",
            }}
          >
            {deckName}
          </h2>
          <p style={{ fontSize: "1.2rem", color: "#555" }}>
            Este baralho possui {deck.cards.length}{" "}
            {deck.cards.length === 1 ? "card" : "cards"}.
          </p>
          <button
            onClick={handleStartStudy}
            style={{
              padding: "10px 20px",
              backgroundColor: "#2e2e2e",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "1rem",
              marginTop: "20px",
            }}
          >
            Estudar agora
          </button>
        </div>
      ) : (
        <p style={{ fontSize: "1.5rem", color: "#888" }}>
          Baralho não encontrado.
        </p>
      )}
    </div>
  );
};

export default DeckPage;
