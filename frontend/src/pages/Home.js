import React from "react";
import { Link } from "react-router-dom";

const Home = ({ decks }) => {
  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ color: "#333", marginBottom: "20px" }}>Meus Baralhos</h2>
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          border: "1px solid #ccc",
          borderRadius: "5px",
        }}
      >
        {decks.length > 0 ? (
          decks.map((deck, index) => (
            <li
              key={index}
              style={{
                padding: "10px",
                borderBottom: index !== decks.length - 1 ? "1px solid #ccc" : "none",
                backgroundColor: "#f9f9f9",
              }}
            >
              <Link
                to={`/deck/${deck.name}`}
                style={{
                  textDecoration: "none",
                  color: "#333",
                  fontWeight: "bold",
                }}
              >
                {deck.name}
              </Link>
            </li>
          ))
        ) : (
          <p style={{ textAlign: "center", color: "#888" }}>
            Você ainda não criou nenhum baralho.
          </p>
        )}
      </ul>
    </div>
  );
};

export default Home;
