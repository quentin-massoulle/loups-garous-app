function ChatContent({ activeTab }) {
    const messages = {
      general: ["Bienvenue dans le chat général", "Discussion entre tous les joueurs"],
      loups: ["Conversation secrète entre loups-garous"],
      village: ["Discussion entre villageois"]
    };
  
    return (
      <div className="chat-content">
        {messages[activeTab].map((msg, index) => (
          <p key={index}>{msg}</p>
        ))}
      </div>
    );
  }

  export default ChatContent;