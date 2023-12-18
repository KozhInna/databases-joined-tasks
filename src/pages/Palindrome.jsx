import { useState } from "react";
import styles from "./Palindrome.module.css";
import Header from "../Components/Header";

function Palindrome() {
  const [input, setInput] = useState("");
  const [isPolindrom, setIsPolindrom] = useState("");

  function palindromHandler(text) {
    if (input !== "") {
      const modifiedInput = text.toLowerCase().replace(/\s/g, "");
      const reversedInput = modifiedInput.split("").reverse().join("");
      setIsPolindrom(
        modifiedInput === reversedInput ? (
          <p>«{input}» is a palindrom 👍</p>
        ) : (
          <p>«{input}» is not a palindrom 👎</p>
        )
      );
    } else return null;
  }

  function resetFunction() {
    if (input !== "") {
      setInput("");
    } else {
      setIsPolindrom("");
    }
  }

  return (
    <>
      <main>
        <Header />
        <div className={styles.container}>
          <h1>Palindrom checker</h1>
          <div>
            <label>
              {" "}
              Check if a word, a number or a sentence is a Palindrom:{" "}
            </label>
            <input
              type="text"
              onChange={(e) => setInput(e.target.value)}
              placeholder="type here..."
              value={input}
            />
            <button
              onClick={() => {
                palindromHandler(input);
                resetFunction();
              }}
            >
              {isPolindrom === "" ? "Check" : "Clean"}
            </button>
          </div>
          <h3>{isPolindrom}</h3>
        </div>
      </main>
    </>
  );
}

export default Palindrome;
