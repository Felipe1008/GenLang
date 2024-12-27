import React, { useState } from "react";

const PanelModal = ({ decks, onClose }) => {
  const [selectedDeck, setSelectedDeck] = useState(decks?.[0] || null);

  if (!decks || decks.length === 0) {
    return (
      <div style={styles.modal}>
        <button
          style={styles.closeButton}
          onClick={onClose}
          onMouseEnter={(e) => (e.target.style.textDecoration = "underline")}
          onMouseLeave={(e) => (e.target.style.textDecoration = "none")}
        >
          Fechar
        </button>
        <p style={{ color: "white" }}>Nenhum baralho disponível.</p>
      </div>
    );
  }

  return (
    <div style={styles.modal}>
      <button style={styles.closeButton} onClick={onClose}>
        Fechar
      </button>
      <div style={styles.content}>
        {/* Lista de baralhos */}
        <div style={styles.decksList}>
          <h3 style={{ color: "white" }}>Baralhos</h3>
          {decks.map((deck, index) => (
            <p
              key={index}
              style={{
                cursor: "pointer",
                fontWeight: deck === selectedDeck ? "bold" : "normal",
                color: deck === selectedDeck ? "#1e90ff" : "white",
                padding: "5px",
                backgroundColor: deck === selectedDeck ? "#555" : "transparent",
                borderRadius: "4px",
              }}
              onClick={() => setSelectedDeck(deck)}
            >
              {deck.name}
            </p>
          ))}
        </div>

        {/* Lista de cartões do baralho selecionado */}
        <div style={styles.cardsList}>
          {selectedDeck ? (
            <>
              <h3 style={{ color: "white" }}>Cartões</h3>
              {selectedDeck.cards.length > 0 ? (
                <ul style={{ listStyleType: "none", padding: 0 }}>
                  {selectedDeck.cards.map((card, index) => (
                    <li
                      key={index}
                      style={{
                        backgroundColor: "#2e2e2e",
                        color: "white",
                        padding: "10px",
                        marginBottom: "5px",
                        borderRadius: "4px",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                      }}
                    >
                      {card.frontText}
                    </li>
                  ))}
                </ul>
              ) : (
                <p style={{ color: "#ccc" }}>Nenhum cartão neste baralho.</p>
              )}
            </>
          ) : (
            <p style={{ color: "#ccc" }}>Nenhum baralho selecionado.</p>
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
    width: "60%",
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
    color: "white",
  },
  cardsList: {
    flex: 2,
    padding: "10px",
    color: "white",
  },
};

export default PanelModal;
