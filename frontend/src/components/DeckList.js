import React from "react";
import DeckItem from "./DeckItem";

const DeckList = ({ decks }) => {
  return (
    <div>
      {decks.length === 0 ? (
        <p>Nenhum baralho criado ainda.</p>
      ) : (
        decks.map((deck, index) => <DeckItem key={index} deck={deck} />)
      )}
    </div>
  );
};

export default DeckList;
