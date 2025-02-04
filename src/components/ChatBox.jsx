import { useState } from "react";
import ChatTabs from "./ChatTabs";
import ChatContent from "./ChatContent";
import ChatInput from "./ChatInput.jsx";

function ChatBox() {
  const [activeTab, setActiveTab] = useState("general");

  return (
    <div className="chat-box">
      <ChatTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <ChatContent activeTab={activeTab} />
      <ChatInput />
    </div>
  );
}

export default ChatBox;