function ChatTabs({ activeTab, setActiveTab }) {
    return (
      <div className="chat-tabs">
        {['general', 'loups', 'village'].map(tab => (
          <div
            key={tab}
            className={`tab ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </div>
        ))}
      </div>
    );
  }
  
  export default ChatTabs