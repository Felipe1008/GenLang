import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import DeckPage from "./pages/DeckPage";
import StudyPage from "./pages/StudyPage";

const App = () => {
  const [decks, setDecks] = useState([]);
  const generateId = () => Date.now() + Math.random().toString(36).substring(2, 9);

  const addDeck = (deckOrName) => {
    const newDeck =
      typeof deckOrName === "string"
        ? { id: generateId(), name: deckOrName, cards: [] }
        : deckOrName; // Se já for um objeto, utiliza diretamente
    setDecks((prevDecks) => [...prevDecks, newDeck]);
  };

  return (
    <>
      {/* Passando decks e setDecks para o Navbar */}
      <Navbar decks={decks} setDecks={setDecks} addDeck={addDeck} />
      <Routes>
        <Route path="/" element={<Home decks={decks} />} />
        <Route path="/deck/:deckName" element={<DeckPage decks={decks} />} />
        <Route path="/deck/:deckName/study" element={<StudyPage decks={decks} />} />
      </Routes>
    </>
  );
};

export default App;
