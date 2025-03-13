import React from 'react';

export default function Subscription() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold">Subscription Management</h1>
      <p className="text-sm text-gray-500 mb-6">Manage your subscription plan and billing information.</p>

      {/* Current Plan Section */}
      <div className="border rounded-lg p-6 mb-6 bg-white">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-lg font-bold mb-1">Current Plan</h2>
            <p className="text-sm mb-4">You are currently on the Pro plan.</p>
            
            <div className="space-y-2 mb-4">
              <div className="flex">
                <span className="text-sm font-medium w-32">Billing cycle</span>
                <span className="text-sm">Yearly billing</span>
              </div>
              <div className="flex">
                <span className="text-sm font-medium w-32">Next billing date</span>
                <span className="text-sm">January 1, 2024</span>
              </div>
              <div className="flex">
                <span className="text-sm font-medium w-32">Payment method</span>
                <span className="text-sm">Visa ending in 4242</span>
              </div>
            </div>
            
            <button className="text-sm text-red-500 font-medium">Cancel Subscription</button>
          </div>
          
          <div className="text-right flex flex-col items-end">
            <span className="bg-blue-100 text-blue-600 text-xs font-medium px-4 py-1 rounded-full">Pro</span>
            
            <div className="mt-3 space-y-2">
              <button className="border rounded text-sm px-4 py-1 text-gray-700">Change to Monthly</button>
              <div className="text-sm font-medium">$199.00/year</div>
              <button className="border rounded text-sm px-4 py-1 text-gray-700">Update</button>
              <button className="bg-blue-600 text-white text-sm px-4 py-1 rounded">Manage Billing</button>
            </div>
          </div>
        </div>
      </div>

      {/* Available Plans Section */}
      <h2 className="text-lg font-bold mb-4">Available Plans</h2>
      <div className="grid grid-cols-3 gap-6 mb-6">
        {/* Free Plan */}
        <div className="border rounded-lg p-6 bg-white">
          <h3 className="text-xl font-bold mb-1">$0<span className="text-sm font-normal text-gray-500">/month</span></h3>
          <div className="space-y-3 mt-4">
            <div className="flex items-center">
              <svg className="h-4 w-4 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">Basic features</span>
            </div>
            <div className="flex items-center">
              <svg className="h-4 w-4 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">1 project</span>
            </div>
            <div className="flex items-center">
              <svg className="h-4 w-4 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">Team collaboration</span>
            </div>
            <div className="flex items-center text-gray-400">
              <svg className="h-4 w-4 text-gray-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              <span className="text-sm line-through">Advanced integrations</span>
            </div>
            <div className="flex items-center text-gray-400">
              <svg className="h-4 w-4 text-gray-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              <span className="text-sm line-through">Priority support</span>
            </div>
          </div>
          <button className="mt-6 w-full border rounded py-2 text-sm font-medium">Downgrade</button>
        </div>

        {/* Pro Plan */}
        <div className="border border-blue-200 rounded-lg p-6 bg-blue-50 shadow-md">
          <h3 className="text-xl font-bold mb-1">$19<span className="text-sm font-normal text-gray-500">/month</span></h3>
          <div className="space-y-3 mt-4">
            <div className="flex items-center">
              <svg className="h-4 w-4 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">All Free features</span>
            </div>
            <div className="flex items-center">
              <svg className="h-4 w-4 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">Unlimited projects</span>
            </div>
            <div className="flex items-center">
              <svg className="h-4 w-4 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">Team collaboration</span>
            </div>
            <div className="flex items-center">
              <svg className="h-4 w-4 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">Basic integrations</span>
            </div>
            <div className="flex items-center text-gray-400">
              <svg className="h-4 w-4 text-gray-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              <span className="text-sm line-through">Priority support</span>
            </div>
          </div>
          <div className="mt-6 w-full bg-blue-600 rounded py-2 text-sm text-white font-medium text-center">
            <span className="inline-block">Current Plan</span>
          </div>
        </div>

        {/* Enterprise Plan */}
        <div className="border rounded-lg p-6 bg-white">
          <h3 className="text-xl font-bold mb-1">$49<span className="text-sm font-normal text-gray-500">/month</span></h3>
          <div className="space-y-3 mt-4">
            <div className="flex items-center">
              <svg className="h-4 w-4 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">All Pro features</span>
            </div>
            <div className="flex items-center">
              <svg className="h-4 w-4 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">Unlimited everything</span>
            </div>
            <div className="flex items-center">
              <svg className="h-4 w-4 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">Advanced team controls</span>
            </div>
            <div className="flex items-center">
              <svg className="h-4 w-4 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">Advanced integrations</span>
            </div>
            <div className="flex items-center">
              <svg className="h-4 w-4 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">Priority support</span>
            </div>
          </div>
          <button className="mt-6 w-full bg-blue-600 rounded py-2 text-sm text-white font-medium">Upgrade</button>
        </div>
      </div>

      {/* Support Section */}
      <div className="border rounded-lg p-6 bg-white">
        <div className="flex items-start">
          <div className="mr-3 mt-1">
            <svg className="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
            </svg>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-1">Need help with your subscription?</h3>
            <p className="text-sm text-gray-500 mb-3">Our support team is available 24/7 to assist you with any questions about your subscription.</p>
            <button className="text-sm text-blue-600 font-medium">Contact Support</button>
          </div>
        </div>
      </div>
    </div>
  );
}