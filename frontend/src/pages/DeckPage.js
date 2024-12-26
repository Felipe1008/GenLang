import React from "react";
import { useParams } from "react-router-dom";

const DeckPage = ({ decks }) => {
  const { deckName } = useParams();
  const deck = decks.find((d) => d.name === deckName);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100vh", // Ajusta a altura para preencher a tela
        textAlign: "center",
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
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {deck.cards.map((card, index) => (
              <li key={index} style={{ marginBottom: "10px" }}>
                {card.frontText}
              </li>
            ))}
          </ul>
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
