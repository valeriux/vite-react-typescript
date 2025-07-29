import { add, format } from "date-fns";
import words from "./wordList.json";
import { useState } from "react";

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });
  return (
    <>
      <p>
        Tomorrow's Date: {format(add(new Date(), { days: 1 }), "do MMMM yyyy")}
      </p>
    </>
  );
}

export default App;
