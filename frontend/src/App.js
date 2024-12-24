import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import DeckPage from "./pages/DeckPage";

const App = () => {
  const [decks, setDecks] = useState([]);

  const addDeck = (deckName) => {
    setDecks([...decks, { name: deckName, cards: [] }]);
  };

  return (
    <>
      <Navbar decks={decks} addDeck={addDeck} />
      <Routes>
        <Route path="/" element={<Home decks={decks} />} />
        <Route path="/deck/:deckName" element={<DeckPage decks={decks} />} />
      </Routes>
    </>
  );
};

export default App;
