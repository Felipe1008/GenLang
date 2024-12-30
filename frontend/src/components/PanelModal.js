import React, { useState } from "react";

const PanelModal = ({ decks, onClose, updateCard, deleteCard }) => {
  const [selectedDeckId, setSelectedDeckId] = useState(decks?.[0]?.id || null);
  const [selectedCardId, setSelectedCardId] = useState(null);
  const [cardText, setCardText] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);

  const selectedDeck = decks.find((deck) => deck.id === selectedDeckId);
  const selectedCard = selectedDeck?.cards.find((card) => card.id === selectedCardId);

  const handleCardSelect = (card) => {
    setSelectedCardId(card.id);
    setCardText(card.frontText);
  };

  const handleCardUpdate = () => {
    if (selectedCard && selectedDeck) {
      updateCard(selectedDeck.id, selectedCard.id, cardText);
      setCardText(""); // Opcional, para limpar a área de edição
    }
  };

  const handleDeleteConfirmation = () => {
    setShowConfirmation(true);
  };

  const confirmCardDelete = () => {
    if (selectedCard && selectedDeck) {
      deleteCard(selectedDeck.id, selectedCard.id);
      setSelectedCardId(null);
      setCardText("");
      setShowConfirmation(false);
    }
  };

  const cancelCardDelete = () => {
    setShowConfirmation(false);
  };

  return (
    <div style={styles.modal}>
      <button style={styles.closeButton} onClick={onClose}>
        Fechar
      </button>
      <div style={styles.content}>
        <div style={styles.decksList}>
          <h3 style={{ color: "white" }}>Baralhos</h3>
          {decks.map((deck) => (
            <p
              key={deck.id}
              style={{
                cursor: "pointer",
                fontWeight: deck.id === selectedDeckId ? "bold" : "normal",
                color: deck.id === selectedDeckId ? "#1e90ff" : "white",
                padding: "5px",
                backgroundColor: deck.id === selectedDeckId ? "#555" : "transparent",
                borderRadius: "4px",
              }}
              onClick={() => setSelectedDeckId(deck.id)}
            >
              {deck.name}
            </p>
          ))}
        </div>

        <div style={styles.cardsList}>
          {selectedDeck ? (
            <>
              <h3 style={{ color: "white" }}>Cartões</h3>
              {selectedDeck.cards.length > 0 ? (
                <ul style={{ listStyleType: "none", padding: 0 }}>
                  {selectedDeck.cards.map((card) => (
                    <li
                      key={card.id}
                      style={{
                        backgroundColor: "#2e2e2e",
                        color: "white",
                        padding: "10px",
                        marginBottom: "5px",
                        borderRadius: "4px",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                        cursor: "pointer",
                      }}
                      onClick={() => handleCardSelect(card)}
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

      {selectedCard && (
        <div style={styles.cardEditor}>
          <h4 style={{ color: "white" }}>Cartão</h4>
          <textarea
            style={styles.textArea}
            value={cardText}
            onChange={(e) => setCardText(e.target.value)}
          />
          <button style={styles.saveButton} onClick={handleCardUpdate}>
            Editar
          </button>
          <button style={styles.deleteButton} onClick={handleDeleteConfirmation}>
            Excluir
          </button>
        </div>
      )}

      {showConfirmation && (
        <div style={styles.confirmation}>
          <p style={{ color: "white" }}>Tem certeza que deseja excluir este cartão?</p>
          <button style={styles.confirmButton} onClick={confirmCardDelete}>
            Sim
          </button>
          <button style={styles.cancelButton} onClick={cancelCardDelete}>
            Não
          </button>
        </div>
      )}
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
    gap: "10px",
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
  cardEditor: {
    marginTop: "20px",
    padding: "10px",
    backgroundColor: "#444",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
    color: "white",
  },
  textArea: {
    width: "100%",
    height: "80px",
    margin: "10px 0",
    padding: "10px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    fontSize: "14px",
    backgroundColor: "#222",
    color: "white",
  },
  saveButton: {
    backgroundColor: "#4caf50",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    marginRight: "10px",
  },
  deleteButton: {
    backgroundColor: "#f44336",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  confirmation: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#333",
    padding: "20px",
    borderRadius: "8px",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0,0,0,0.5)",
    color: "white",
  },
  confirmButton: {
    backgroundColor: "#4caf50",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    marginRight: "10px",
  },
  cancelButton: {
    backgroundColor: "#f44336",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};


export default PanelModal;
