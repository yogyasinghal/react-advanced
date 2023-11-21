import React, { useState, useEffect } from "react";

function WebSocketComponent() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const socket = new WebSocket("wss://example.com/socket");

    socket.addEventListener("message", (event) => {
      setMessages((prevMessages) => [...prevMessages, event.data]);
    });

    return () => {
      socket.close(); // Cleanup the WebSocket connection on unmount
    };
  }, []); // Run once after initial render

  return (
    <div>
      <h1>WebSocket Messages:</h1>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
    </div>
  );
}

export default WebSocketComponent;
