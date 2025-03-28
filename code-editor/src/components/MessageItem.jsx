
// MessageItem.js
import React from 'react';

function MessageItem({ message, isCurrentUser }) {
  return (
    <div className={`message-item ${isCurrentUser ? 'current-user' : ''}`}>
      {!isCurrentUser && message.avatar && (
        <div className="message-avatar">
          {message.avatar.startsWith('http') ? (
            <img src={message.avatar} alt={message.author} />
          ) : (
            <div className="avatar-placeholder">{message.avatar}</div>
          )}
        </div>
      )}
      
      <div className="message-content">
        <div className="message-header">
          <span className="message-author">
            {message.author}
            {message.role && <span className="author-role">{message.role}</span>}
          </span>
          <span className="message-date">{message.date}</span>
        </div>
        
        <div className="message-text">
          {message.isLink ? (
            <a href={message.text} target="_blank" rel="noopener noreferrer">{message.text}</a>
          ) : (
            message.text.split('\n').map((text, i) => (
              <p key={i}>{text}</p>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default MessageItem;

// App.css