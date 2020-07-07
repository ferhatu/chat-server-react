import React from "react";
import apiRoot from "./apiRoot";
import Chatflow from "./Chatflow";
import "./App.css";

function App() {
  const handleAddNew = () => {
    fetch(apiRoot, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        from: document.querySelector(".input-name").value,
        text: document.querySelector(".input-message").value,
      }),
    })
      .then((res) => res.json())
      .then(() => {
        console.log("Message Added");
      });
  };

  return (
    <div className="App">
      <h2>Send a message</h2>
      <form>
        <p>
          Name:{" "}
          <input
            className="input-name"
            type="text"
            name="from"
            placeholder="Your Name"
          />{" "}
          <br />
          Message:{" "}
          <input
            className="input-message"
            type="text"
            placeholder="The message..."
          />
          <br />
        </p>
        <button onClick={() => handleAddNew()} type="submit">
          Send
        </button>
        <Chatflow />
      </form>
    </div>
  );
}

export default App;
