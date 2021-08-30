import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>

      <div className="form">
        <input
          type="text"
          onChange={(event) => setInputText(event.target.value)}
          value={inputText}
        />
        <button
          onClick={() => {
            if (inputText === "") {
              alert("error 404!");
            } else {
              setItems((prevValue) => {
                return [...prevValue, inputText];
              });
            }
            setInputText("");
          }}
        >
          <span>Add</span>
        </button>
      </div>

      <div>
        <ul>
          {items.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
