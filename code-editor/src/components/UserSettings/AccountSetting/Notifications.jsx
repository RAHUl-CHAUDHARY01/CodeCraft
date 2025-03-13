import React from 'react';

export default function Notifications() {
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-700">Notification Preferences</h2>
      <p className="text-sm text-gray-500">
        Manage how and when you receive notifications.
      </p>

      <div className="mt-4 space-y-4">
        <div>
          <p className="text-sm font-semibold">Email Notifications</p>
          <div>
            <input type="checkbox" checked /> Email notifications
          </div>
          <div>
            <input type="checkbox" /> Marketing emails
          </div>
          <div>
            <input type="checkbox" checked /> Product updates
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold">Push Notifications</p>
          <div>
            <input type="checkbox" checked /> Push notifications
          </div>
        </div>

        <div className="flex justify-end space-x-2 mt-4">
          <button className="bg-gray-300 px-4 py-2 rounded-md">Cancel</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
