import React from "react";

const DeckItem = ({ deck }) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", padding: "10px", border: "1px solid #ddd", borderRadius: "5px", margin: "5px 0" }}>
      <span>{deck.name}</span>
      <span>{deck.cards} cartões para revisão</span>
    </div>
  );
};

export default DeckItem;
