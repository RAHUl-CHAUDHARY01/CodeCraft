import React, { useState } from 'react';
import Profile from './Profile';
import Security from './Security';
import Notifications from './Notifications';

export default function Account() {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <div className="flex bg-gray-50 h-screen">
      {/* Sidebar */}
      <div className="w-1/4 bg-white shadow-md p-4">
        <div
          className={`p-3 rounded-lg cursor-pointer ${
            activeTab === 'profile' ? 'bg-gray-200' : ''
          }`}
          onClick={() => setActiveTab('profile')}
        >
          <p className="font-semibold text-gray-700">Profile</p>
        </div>
        <div
          className={`p-3 rounded-lg cursor-pointer ${
            activeTab === 'security' ? 'bg-gray-200' : ''
          }`}
          onClick={() => setActiveTab('security')}
        >
          <p className="font-semibold text-gray-700">Security</p>
        </div>
        <div
          className={`p-3 rounded-lg cursor-pointer ${
            activeTab === 'notifications' ? 'bg-gray-200' : ''
          }`}
          onClick={() => setActiveTab('notifications')}
        >
          <p className="font-semibold text-gray-700">Notifications</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="w-3/4 p-6">
        {activeTab === 'profile' && <Profile />}
        {activeTab === 'security' && <Security />}
        {activeTab === 'notifications' && <Notifications />}
      </div>
    </div>
  );
}
