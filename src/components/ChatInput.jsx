import { useState } from "react";

function ChatInput() {
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    if (message.trim()) {
      console.log("Message envoyé:", message);
      setMessage("");
    }
  };

  return (
    <div className="chat-input">
      <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Tapez un message..." />
      <button onClick={sendMessage}>Envoyer</button>
    </div>
  );
}

export default ChatInput;