import React, { useState, useEffect } from "react";
import apiRoot from "./apiRoot";

const Chatflow = () => {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    fetch(apiRoot)
      .then((res) => res.json())
        .then(data => setMessages(data));
  }, []);

  return (
    <div>
      {messages.map((message) => (
        <div>
          <p>{message.from}</p>
          <p>{message.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Chatflow;
