import React, { useState } from "react";
import NavbarButton from "./NavbarButton";
import { useLocation } from "react-router-dom";
import PanelModal from "./PanelModal";
import AddCardModal from "./AddCardModal";
import { v4 as uuidv4 } from 'uuid';


const Navbar = ({ deckName, decks, addDeck, setDecks }) => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [newDeckName, setNewDeckName] = useState("");
  const location = useLocation();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const handleCreateDeck = () => {
    if (newDeckName.trim()) {
      const newDeck = {
        id: uuidv4(), // Gera um ID único
        name: newDeckName,
        cards: [],
      };
      addDeck(newDeck);
      setNewDeckName("");
      setIsCreateModalOpen(false);
    }
  };

  const addCardToDeck = (frontText, selectedDeckId) => {
    const newCard = {
      id: uuidv4(), // Gera um ID único para o cartão
      frontText,
    };
    setDecks((prevDecks) =>
      prevDecks.map((deck) =>
        deck.id === selectedDeckId
          ? { ...deck, cards: [...deck.cards, newCard] }
          : deck
      )
    );
  };
  const onAddCard = (frontText, selectedDeckId) => {
    if (!selectedDeckId) {
      console.error("Erro: Baralho selecionado inválido.", selectedDeckId);
      return;
    }

  addCardToDeck(frontText, selectedDeckId);
  console.log("Cartão adicionado ao baralho:", selectedDeckId, frontText);
};

const updateCardInDeck = (deckId, cardId, updatedText) => {
  setDecks((prevDecks) =>
    prevDecks.map((deck) =>
      deck.id === deckId
        ? {
            ...deck,
            cards: deck.cards.map((card) =>
              card.id === cardId ? { ...card, frontText: updatedText } : card
            ),
          }
        : deck
    )
  );
};

const deleteCardFromDeck = (deckId, cardId) => {
  setDecks((prevDecks) =>
    prevDecks.map((deck) =>
      deck.id === deckId
        ? { ...deck, cards: deck.cards.filter((card) => card.id !== cardId) }
        : deck
    )
  );
};

  return (
    <>
      <nav>
        <div style={{ backgroundColor: "#2e2e2e", padding: "10px 0" }}>
          <h1
            style={{
              color: "white",
              fontFamily: "cursive",
              margin: "0",
              textAlign: "center",
            }}
          >
            {deckName || "GenLang"}
          </h1>
        </div>
        <hr
          style={{
            width: "100%",
            border: "none",
            borderTop: "1px solid #1e1e1e",
            margin: "0",
          }}
        />
        <div style={{ backgroundColor: "#3e3e3e", padding: "10px 0" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <NavbarButton label="Baralhos" path="/" />
            <NavbarButton label="Painel" onClick={() => setIsPanelOpen(true)} />
            <NavbarButton
              label="Adicionar"
              onClick={() => setIsAddModalOpen(true)}
            />
            {location.pathname === "/" && (
              <NavbarButton
                label="Criar Baralho"
                onClick={() => setIsCreateModalOpen(true)}
              />
            )}
          </div>
        </div>
      </nav>

      {isPanelOpen && (
        <PanelModal
          decks={decks}
          onClose={() => setIsPanelOpen(false)}
          updateCard={updateCardInDeck}
          deleteCard={deleteCardFromDeck}
        />
      )}

      {isCreateModalOpen && (
        <div style={styles.modal}>
          <h3 style={{ color: "white" }}>Nome do baralho:</h3>
          <input
            type="text"
            value={newDeckName}
            onChange={(e) => setNewDeckName(e.target.value)}
            style={styles.input}
          />
          <div style={styles.buttons}>
            <button style={styles.okButton} onClick={handleCreateDeck}>
              OK
            </button>
            <button
              style={styles.cancelButton}
              onClick={() => setIsCreateModalOpen(false)}
            >
              Cancelar
            </button>
          </div>
        </div>
      )}

      {isAddModalOpen && (
        <AddCardModal
          onClose={() => setIsAddModalOpen(false)}
          onAddCard={onAddCard}
          decks={decks} // Passa os baralhos para o AddCardModal
        />
      )}
    </>
  );
};

const styles = {
  modal: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#3e3e3e",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
    zIndex: 1000,
    width: "300px",
  },
  input: {
    width: "90%",
    padding: "8px",
    marginBottom: "10px",
    border: "1px solid rgb(38, 82, 225)",
    borderRadius: "4px",
    backgroundColor: "grey",
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
    marginRight: "10px",
  },
  okButton: {
    backgroundColor: "gray",
    border: "1px solid rgb(38, 82, 225)",
    color: "white",
    padding: "8px 16px",
    borderRadius: "4px",
    cursor: "pointer",
    marginRight: "5px",
  },
  cancelButton: {
    backgroundColor: "gray",
    color: "white",
    border: "none",
    padding: "8px 16px",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default Navbar;