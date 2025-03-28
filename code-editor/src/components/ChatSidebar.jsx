// ChatSidebar.js
import React from 'react';


function ChatSidebar({ groups, selectedChat, onSelectChat }) {
  return (
    <div className="chat-sidebar">
      <div className="sidebar-header">
        <h2>Community Chats</h2>
        <button className="close-button">×</button>
      </div>
      
      <div className="sidebar-groups">
        <h3>Groups</h3>
        <ul className="group-list">
          {groups.map(group => (
            <li 
              key={group.id} 
              className={`group-item ${selectedChat && selectedChat.id === group.id ? 'selected' : ''}`}
              onClick={() => onSelectChat(group)}
            >
              <div className="group-icon">{group.icon}</div>
              <div className="group-name">{group.name}</div>
              <div className="chevron">›</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ChatSidebar;
