import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const StudyPage = ({ decks }) => {
  const { deckName } = useParams();
  const navigate = useNavigate();
  const deck = decks.find((d) => d.name === deckName);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [generatedSentence, setGeneratedSentence] = useState("");
  const [translatedSentence, setTranslatedSentence] = useState("");

  if (!deck) {
    return (
      <p style={{ textAlign: "center", color: "#888", fontSize: "1.5rem" }}>
        Baralho não encontrado.
      </p>
    );
  }

  const currentCard = deck.cards[currentCardIndex];

  const generateSentence = async (word) => {
    // Simula geração de frase com IA
    const fakeGenerated = `Exemplo de frase com "${word}" gerada pela IA.`;
    const fakeTranslation = `Tradução da frase: "${fakeGenerated}".`;

    setGeneratedSentence(fakeGenerated);
    setTranslatedSentence(fakeTranslation);
  };

  const handleShowAnswer = () => {
    setShowAnswer(true);
  };

  const handleFeedback = (wasCorrect) => {
    // Lógica de revisão espaçada
    console.log(`Usuário marcou como ${wasCorrect ? "Bom" : "Ruim"} o cartão.`);

    setShowAnswer(false);
    setGeneratedSentence("");
    setTranslatedSentence("");

    if (currentCardIndex < deck.cards.length - 1) {
      setCurrentCardIndex((prevIndex) => prevIndex + 1);
    } else {
      alert("Revisão concluída!");
      navigate(`/deck/${deckName}`);
    }
  };

  React.useEffect(() => {
    if (currentCard) {
      generateSentence(currentCard.frontText);
    }
  }, [currentCard]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "lightblue",
        padding: "30px",
      }}
    >
      <h2 style={{ fontFamily: "cursive", fontSize: "1.5rem", marginBottom: "20px" }}>
        Revisão: {deckName}
      </h2>
      {currentCard ? (
        <div
          style={{
            backgroundColor: "darkgrey",
            borderRadius: "8px",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            padding: "20px",
            textAlign: "center",
            maxWidth: "500px",
            width: "100%",
          }}
        >
          <div
            style={{
              marginBottom: "15px",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              backgroundColor: "#f9f9f9",
              fontSize: "1.2rem",
            }}
          >
            {currentCard.frontText}
          </div>
          <div
            style={{
              marginBottom: "15px",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              backgroundColor: "#f9f9f9",
              fontSize: "1rem",
            }}
          >
            {generatedSentence}
          </div>
          {showAnswer ? (
            <>
              <div
                style={{
                  marginBottom: "15px",
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  backgroundColor: "#f0fff0",
                  fontSize: "1rem",
                }}
              >
                {translatedSentence}
              </div>
              <div>
                <button
                  onClick={() => handleFeedback(true)}
                  style={{
                    backgroundColor: "forestgreen",
                    color: "white",
                    border: "1px solid blue",
                    padding: "10px 20px",
                    borderRadius: "4px",
                    cursor: "pointer",
                    marginRight: "10px",
                  }}
                >
                  Bom
                </button>
                <button
                  onClick={() => handleFeedback(false)}
                  style={{
                    backgroundColor: "red",
                    color: "white",
                    border: "1px solid black",
                    padding: "10px 20px",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  Ruim
                </button>
              </div>
            </>
          ) : (
            <button
              onClick={handleShowAnswer}
              style={{
                backgroundColor: "lightblue",
                color: "black",
                border: "blue",
                padding: "10px 20px",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Mostrar Resposta
            </button>
          )}
        </div>
      ) : (
        <p style={{ fontSize: "1.5rem", color: "#888" }}>
          Nenhum cartão disponível para revisão.
        </p>
      )}
    </div>
  );
};

export default StudyPage;
