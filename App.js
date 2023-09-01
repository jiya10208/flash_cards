import { useState } from "react";
const flashcards = [
  {
    id: 2523,
    question: "What language is react based on?",
    answer: "Javascript",
  },
  {
    id: 2533,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 2543,
    question: "What's the name of the syntax we use to describe a UI in react?",
    answer: "JSX",
  },
  {
    id: 3553,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },

  {
    id: 2563,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2573,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
];

function App() {
  return (
    <div className="App">
      <Question />{" "}
    </div>
  );
}

function Question() {
  const [selectedid, setSelectedId] = useState(0);
  function handleClick(id) {
    id = selectedid === id ? null : id;
    setSelectedId(id);
  }
  return (
    <div className="questions">
      {flashcards.map((card) => (
        <div
          className="question"
          key={card.id}
          onClick={() => handleClick(card.id)}
        >
          <p
            style={
              card.id === selectedid
                ? {
                    backgroundColor: "rgb(12, 140, 70)",
                    color: "white",
                  }
                : {}
            }
          >
            {card.id === selectedid ? card.answer : card.question}
          </p>
        </div>
      ))}
    </div>
  );
}
export default App;
