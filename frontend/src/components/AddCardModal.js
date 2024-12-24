import React, { useState } from "react";

const AddCardModal = ({ onClose, onAddCard, decks = [] }) => {  // Default to empty array if decks is undefined
  // Ensure decks has at least one element
  const [selectedDeck, setSelectedDeck] = useState(decks.length > 0 ? decks[0].id : "");

  const [frontText, setFrontText] = useState("");

  const handleAdd = () => {
    if (frontText.trim() === "" || !selectedDeck) return;
    onAddCard(frontText, selectedDeck);
    setFrontText("");
    onClose();
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "#2e2e2e",
          padding: "20px",
          borderRadius: "8px",
          width: "400px",
          textAlign: "left",
        }}
      >
        <h1 style={{ color: "white", textAlign: "center", fontSize: "20px" }}>Adicionar Cartão</h1>
        <h2 style={{ color: "white", marginBottom: "5px", fontSize: "16px" }}>Front</h2>
        <input
          type="text"
          placeholder="Digite aqui..."
          value={frontText}
          onChange={(e) => setFrontText(e.target.value)}
          style={{
            width: "90%",
            height: "25px",
            padding: "5px 10px",
            fontSize: "16px",
            border: "1px solid #3e3e3e",
            borderRadius: "4px",
            backgroundColor: "#3e3e3e",
            color: "white",
            outline: "none",
          }}
        />
        <h2 style={{ color: "white", marginTop: "15px", marginBottom: "5px", fontSize: "16px" }}>
          Selecionar Baralho
        </h2>
        {/* ARRUMAR SELECT PARA APARECER OS BARALHOS CORRETAMENTE */}
        <select
          value={selectedDeck}
          onChange={(e) => setSelectedDeck(e.target.value)}
          style={{
            width: "90%",
            height: "30px",
            padding: "5px",
            fontSize: "16px",
            border: "1px solid #3e3e3e",
            borderRadius: "4px",
            backgroundColor: "#3e3e3e",
            color: "white",
            outline: "none",
          }}
        >
          {decks.length > 0 ? (
            decks.map((deck) => (
              <option key={deck.id} value={deck.id} style={{ backgroundColor: "#2e2e2e", color: "white" }}>
                {deck.name}
              </option>
            ))
          ) : (
            <option value="" disabled style={{ backgroundColor: "#2e2e2e", color: "white" }}>
              Nenhum baralho disponível
            </option>
          )}
        </select>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "20px",
          }}
        >
          <button
            onClick={handleAdd}
            style={{
              backgroundColor: "gray",
              color: "white",
              border: "none",
              padding: "5px 10px",
              borderRadius: "4px",
              cursor: "pointer",
              marginRight: "5px",
            }}
          >
            Adicionar
          </button>
          <button
            onClick={onClose}
            style={{
              backgroundColor: "gray",
              color: "white",
              border: "none",
              padding: "5px 10px",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};


export default AddCardModal;
