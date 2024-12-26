import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import DeckPage from "./pages/DeckPage";

const App = () => {
  const [decks, setDecks] = useState([]);

  const addDeck = (deckName) => {
    setDecks([...decks, { id: decks.length + 1, name: deckName, cards: [] }]);
  };

  return (
    <>
      {/* Passando decks e setDecks para o Navbar */}
      <Navbar decks={decks} setDecks={setDecks} addDeck={addDeck} />
      <Routes>
        <Route path="/" element={<Home decks={decks} />} />
        <Route path="/deck/:deckName" element={<DeckPage decks={decks} />} />
      </Routes>
    </>
  );
};

export default App;
