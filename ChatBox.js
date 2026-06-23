"use client";
import { useState } from "react";

export default function ChatBox() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = () => {
    if (!input) return;

    const newMsg = { role: "user", text: input };
    setMessages([...messages, newMsg]);

    const botReply = { role: "bot", text: "Backend not connected yet 🚀" };
    setMessages((prev) => [...prev, botReply]);

    setInput("");
  };

  return (
    <div style={{ flex: 1, padding: 20 }}>
      <h2>Chat Box</h2>

      <div style={{ height: 300, overflow: "auto", border: "1px solid #ccc" }}>
        {messages.map((m, i) => (
          <p key={i}>
            <b>{m.role}:</b> {m.text}
          </p>
        ))}
      </div>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type message..."
      />

      <button onClick={sendMessage}>Send</button>
    </div>
  );
}