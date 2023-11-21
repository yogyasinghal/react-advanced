import React, { useRef, useEffect } from "react";

function AutoScrollComponent({ messages }) {
  const messagesContainerRef = useRef();

  useEffect(() => {
    // Scroll to the bottom when messages change
    messagesContainerRef.current.scrollTop =
      messagesContainerRef.current.scrollHeight;
  }, [messages]);

  return (
    <div
      ref={messagesContainerRef}
      style={{ height: "300px", overflowY: "scroll", border: "1px solid #ccc" }}
    >
      {messages.map((message, index) => (
        <p key={index}>{message}</p>
      ))}
    </div>
  );
}
export default AutoScrollComponent;
