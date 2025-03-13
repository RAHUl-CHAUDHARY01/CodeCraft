import React from 'react';

export default function Security() {
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-700">Security Settings</h2>
      <p className="text-sm text-gray-500">Manage your password and security preferences.</p>

      <div className="mt-4 space-y-4">
        <div>
          <label className="text-sm text-gray-600">Current Password</label>
          <input
            type="password"
            className="border rounded-md p-2 w-full"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-gray-600">New Password</label>
            <input
              type="password"
              className="border rounded-md p-2 w-full"
            />
          </div>
          <div>
            <label className="text-sm text-gray-600">Confirm Password</label>
            <input
              type="password"
              className="border rounded-md p-2 w-full"
            />
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold">Two-factor authentication</p>
          <p className="text-xs text-gray-500">
            Protect your account with 2FA
          </p>
          <input type="checkbox" className="ml-2" checked />
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
