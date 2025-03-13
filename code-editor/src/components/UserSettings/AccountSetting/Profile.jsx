import React from 'react';

export default function Profile() {
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-700">Profile Information</h2>
      <p className="text-sm text-gray-500">Update your personal information and how it appears on your account.</p>

      <div className="mt-4 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-gray-600">First Name</label>
            <input
              type="text"
              className="border rounded-md p-2 w-full border-gray-400 outline:border-blue-500"
              value="Jane"
            />
          </div>
          <div>
            <label className="text-sm text-gray-600">Last Name</label>
            <input
              type="text"
              className="border rounded-md p-2 w-full"
              value="Doe"
            />
          </div>
        </div>

        <div>
          <label className="text-sm text-gray-600">Email</label>
          <input
            type="email"
            className="border rounded-md p-2 w-full"
            value="jane.doe@example.com"
          />
        </div>

        <div>
          <label className="text-sm text-gray-600">Bio</label>
          <textarea
            className="border rounded-md p-2 w-full"
            rows="3"
            defaultValue="Product designer and developer based in San Francisco."
          ></textarea>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-gray-600">Location</label>
            <input
              type="text"
              className="border rounded-md p-2 w-full"
              value="San Francisco, CA"
            />
          </div>
          <div>
            <label className="text-sm text-gray-600">Timezone</label>
            <input
              type="text"
              className="border rounded-md p-2 w-full"
              value="Pacific Standard Time (PST)"
            />
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
