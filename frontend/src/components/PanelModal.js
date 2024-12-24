import React, { useState } from "react";

const PanelModal = ({ decks, onClose }) => {
  const [selectedDeck, setSelectedDeck] = useState(decks?.[0] || null);

  if (!decks || decks.length === 0) {
    return (
      <div style={styles.modal}>
        <button 
            style={styles.closeButton} onClick={onClose} 
            onMouseEnter={(e) => (e.target.style.textDecoration = "underline")}
            onMouseLeave={(e) => (e.target.style.textDecoration = "none")}
        >
          Fechar
        </button>
        <p style={{color:"white"}}>Nenhum baralho disponível.</p>
      </div>
    );
  }

  return (
    <div style={styles.modal}>
      <button style={styles.closeButton} onClick={onClose}>
        Fechar
      </button>
      <div style={styles.content}>
        <div style={styles.decksList}>
          {decks.map((deck, index) => (
            <p
              key={index}
              style={{
                cursor: "pointer",
                fontWeight: deck === selectedDeck ? "bold" : "normal",
              }}
              onClick={() => setSelectedDeck(deck)}
            >
              {deck.name}
            </p>
          ))}
        </div>
        <div style={styles.cardsList}>
          {selectedDeck ? (
            <p>Exibindo cartões para: {selectedDeck.name}</p>
          ) : (
            <p>Nenhum baralho selecionado.</p>
          )}
        </div>
      </div>
    </div>
  );
};

const styles = {
  modal: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "grey",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
    zIndex: 1000,
    width: "50%",
    maxHeight: "80%",
    overflowY: "auto",
  },
  closeButton: {
    position: "absolute",
    top: "10px",
    right: "10px",
    background: "none",
    border: "none",
    fontSize: "16px",
    cursor: "pointer",
    color: "white",
  },
  content: {
    display: "flex",
  },
  decksList: {
    flex: 1,
    borderRight: "1px solid #ddd",
    padding: "10px",
  },
  cardsList: {
    flex: 2,
    padding: "10px",
  },
};

export default PanelModal;
