
// ChatWindow.js
import React, { useState, useRef, useEffect } from 'react';
import MessageItem from './MessageItem';

function ChatWindow({ chat, onSendMessage, onClose, currentUser, connected }) {
  const [message, setMessage] = useState('');
  const messagesEndRef = useRef(null);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  useEffect(() => {
    scrollToBottom();
  }, [chat.messages]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() && connected) {
      onSendMessage(message);
      setMessage('');
    }
  };
  
  return (
    <div className="chat-window">
      <div className="chat-header">
        <div className="chat-info">
          <div className="chat-icon">{chat.icon}</div>
          <h2>{chat.name}</h2>
        </div>
        <button className="close-button" onClick={onClose}>×</button>
      </div>
      
      <div className="chat-messages">
        {chat.messages.map(msg => (
          <MessageItem 
            key={msg.id}
            message={msg}
            isCurrentUser={msg.author === currentUser.name}
          />
        ))}
        <div ref={messagesEndRef} />
      </div>
      
      <form className="chat-input" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          disabled={!connected}
        />
        <button 
          type="submit" 
          className="send-button" 
          disabled={!message.trim() || !connected}
        >
          <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
          </svg>
        </button>
      </form>
    </div>
  );
}

export default ChatWindow;
