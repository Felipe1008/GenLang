import React from "react";
import { Link } from "react-router-dom";

const DeckItem = ({ deck }) => {
  return (
    <Link to={`/deck/${deck.name}`} style={{ textDecoration: "none", color: "inherit" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px",
          border: "1px solid #ddd",
          borderRadius: "5px",
          margin: "5px 0",
          cursor: "pointer",
        }}
      >
        <span>{deck.name}</span>
        <span>{deck.cards} cartões para revisão</span>
      </div>
    </Link>
  );
};

export default DeckItem;
