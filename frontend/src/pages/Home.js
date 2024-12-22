import React, { useState } from "react";
import Navbar from "../components/Navbar";
import DeckList from "../components/DeckList";

const Home = () => {
  const [decks] = useState([
    { name: "Baralho 1", cards: 5 },
    { name: "Baralho 2", cards: 10 },
  ]);

  return (
    <div>
      <Navbar />
      <div style={{ padding: "20px" }}>
        <h2>Meus Baralhos</h2>
        <DeckList decks={decks} />
      </div>
    </div>
  );
};

export default Home;
