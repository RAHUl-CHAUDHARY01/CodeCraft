import React from 'react';
import { useState } from 'react';
import { Edit, Settings } from 'lucide-react';
import Documentation from './Documentation';
import Account from './UserSettings/AccountSetting/Account';
import Subscription from './UserSettings/Subscription';

export default function ProfileCard() {

    const [activeTab, setActiveTab] = useState('Account');

    const renderSection = () => {
      switch (activeTab) {
        case 'Account':
          return <Account />;
        case 'Subscription':
          return <Subscription/>;
        case 'Achievements':
          return <p>achievements</p>;
        case 'Public Profile':
          return <p>public</p>;
        case 'Integrations':
          return <p>integrations</p>;
        default:
          return null;
      }
    };
  


  return (
    <div className='mx-5'>

    <div className="flex items-center bg-whitep-6 mx-auto space-x-6 m-3">
      {/* Profile Image */}
      <div className="w-20 h-20 bg-gray-200 rounded-full border-4 border-white shadow-sm"></div>

      {/* Profile Info */}
      <div className="flex-1">
        <h2 className="text-2xl font-bold text-gray-900 flex items-center">
          Jane Doe
          <span className="bg-blue-100 text-blue-600 text-sm font-medium px-2 py-0.5 rounded-full ml-2">
            Pro
          </span>
        </h2>
        <p className="text-gray-500">jane.doe@example.com</p>
        <p className="text-gray-400 text-sm">
          Member since Jan 2023 • San Francisco, CA
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center space-x-3">
        <button className="flex items-center px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-100">
          <Edit size={16} className="mr-2" /> Edit Profile
        </button>

        <button className="flex items-center px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-100">
          <Settings size={16} className="mr-2" /> Preferences
        </button>
      </div>
    </div>
    <div className="mx-auto">
      <div className="flex space-x-8 border-b pb-2 border-2 border-gray-200 rounded-[5px] justify-around items-center bg-gray-200 text-gray-700 font-bold pl-1 pr-1">
        {['Account', 'Subscription', 'Achievements', 'Public Profile', 'Integrations'].map(tab => (
          <button
            key={tab}
            className={`w-1/5 px-4 mt-1 py-2 rounded-[5px] transition-all ${activeTab === tab ? 'bg-white font-bold text-black ' : 'hover:text-gray-700'}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="mt-6">
        {renderSection()}
      </div>
    </div>
    </div>

  );
}
