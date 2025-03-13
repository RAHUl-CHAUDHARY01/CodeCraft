import React from 'react';
import { Search } from 'lucide-react';

const Documentation = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Header/Navbar */}
      <header className="border-b border-gray-800 px-4 py-2 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <a href="#" className="flex items-center">
            <span className="font-bold">CodeCraft</span>
          </a>
          <nav className="flex space-x-4">
            <a href="#" className="text-white">Documentation</a>
            <a href="#" className="text-gray-400 hover:text-white">Guides</a>
            <a href="#" className="text-gray-400 hover:text-white">API</a>
            <a href="#" className="text-gray-400 hover:text-white">Examples</a>
          </nav>
        </div>
        <div className="flex items-center space-x-2">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search documentation..." 
              className="bg-gray-900 px-3 py-1 rounded text-sm w-48 border border-gray-700"
            />
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 text-xs text-gray-500">
              ⌘K
            </div>
          </div>
          <button className="p-1 rounded hover:bg-gray-800">
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" className="text-gray-400">
              <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707"></path>
            </svg>
          </button>
          <button className="p-1 rounded hover:bg-gray-800">
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" className="text-gray-400">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 p-4 border-r border-gray-800">
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="font-medium text-sm">Getting Started</h3>
              <ul className="space-y-1 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-white">Introduction</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Installation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Architecture</a></li>
              </ul>
            </div>
            
            <div className="space-y-2">
              <h3 className="font-medium text-sm">Core Concepts</h3>
              <ul className="space-y-1 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-white">Data Model</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Routing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">State Management</a></li>
              </ul>
            </div>
            
            <div className="space-y-2">
              <h3 className="font-medium text-sm">Advanced Topics</h3>
              <ul className="space-y-1 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-white">Authentication</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Deployment</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Testing</a></li>
              </ul>
            </div>
            
            <div className="space-y-2">
              <h3 className="font-medium text-sm">Resources</h3>
              <ul className="space-y-1 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-white">Examples</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Troubleshooting</a></li>
              </ul>
            </div>
          </div>
        </aside>

        {/* Content */}
        <main className="flex-1 p-6">
          <div className="max-w-5xl">
            <h1 className="text-2xl font-bold mb-2">Documentation</h1>
            <p className="text-gray-400 mb-6">Explore our comprehensive guides, API references, and examples to help you build amazing applications.</p>
            
            {/* Tabs */}
            <div className="border-b border-gray-800 mb-6">
              <nav className="flex space-x-6">
                <a href="#" className="px-1 py-2 border-b-2 border-white font-medium text-sm">Language Documentation</a>
                <a href="#" className="px-1 py-2 text-gray-400 hover:text-white text-sm">API References</a>
                <a href="#" className="px-1 py-2 text-gray-400 hover:text-white text-sm">Keyboard Shortcuts</a>
                <a href="#" className="px-1 py-2 text-gray-400 hover:text-white text-sm">Tutorials & Guides</a>
                <a href="#" className="px-1 py-2 text-gray-400 hover:text-white text-sm">FAQ</a>
              </nav>
            </div>
            
            {/* Language Documentation */}
            <div>
              <h2 className="text-xl font-bold mb-2">Language Documentation</h2>
              <p className="text-gray-400 mb-6">Learn the fundamentals and advanced concepts of our language.</p>
              
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="border border-gray-800 rounded p-4 hover:bg-gray-900">
                  <h3 className="font-bold mb-2">Getting Started</h3>
                  <p className="text-gray-400 text-sm">Learn the basics and set up your development environment.</p>
                </div>
                <div className="border border-gray-800 rounded p-4 hover:bg-gray-900">
                  <h3 className="font-bold mb-2">Core Concepts</h3>
                  <p className="text-gray-400 text-sm">Understand the fundamental principles and architecture.</p>
                </div>
                <div className="border border-gray-800 rounded p-4 hover:bg-gray-900">
                  <h3 className="font-bold mb-2">Syntax Guide</h3>
                  <p className="text-gray-400 text-sm">Comprehensive guide to language syntax and structure.</p>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="border border-gray-800 rounded p-4 hover:bg-gray-900">
                  <h3 className="font-bold mb-2">Type System</h3>
                  <p className="text-gray-400 text-sm">Learn about the type system and type safety features.</p>
                </div>
                <div className="border border-gray-800 rounded p-4 hover:bg-gray-900">
                  <h3 className="font-bold mb-2">Error Handling</h3>
                  <p className="text-gray-400 text-sm">Best practices for handling errors and exceptions.</p>
                </div>
                <div className="border border-gray-800 rounded p-4 hover:bg-gray-900">
                  <h3 className="font-bold mb-2">Advanced Patterns</h3>
                  <p className="text-gray-400 text-sm">Explore advanced language patterns and techniques.</p>
                </div>
              </div>
              
              {/* Code Example */}
              <div className="border border-gray-800 rounded mb-6">
                <div className="border-b border-gray-800 px-4 py-2">
                  <h3 className="font-bold">Code Example</h3>
                </div>
                <div className="bg-gray-900 p-4 font-mono text-sm">
                  <div className="text-gray-500">// Example function with type safety</div>
                  <div><span className="text-blue-400">function</span> <span className="text-yellow-400">greet</span>(<span className="text-purple-400">name</span>: <span className="text-green-400">string</span>, <span className="text-purple-400">age</span>: <span className="text-green-400">number</span>): <span className="text-green-400">string</span> {'{'}</div>
                  <div className="pl-4"><span className="text-blue-400">if</span> (<span className="text-purple-400">age</span> !== <span className="text-blue-400">undefined</span>) {'{'}</div>
                  <div className="pl-8"><span className="text-blue-400">return</span> <span className="text-yellow-400">`Hello, ${'{'}name{'}'}! You are ${'{'}age{'}'} years old.`</span>;</div>
                  <div className="pl-4">{'}'}</div>
                  <div className="pl-4"><span className="text-blue-400">return</span> <span className="text-yellow-400">`Hello, ${'{'}name{'}'}!`</span>;</div>
                  <div>{'}'}</div>
                  <div>&nbsp;</div>
                  <div className="text-gray-500">// Using the function</div>
                  <div><span className="text-blue-400">const</span> <span className="text-purple-400">message</span> = <span className="text-yellow-400">greet</span>(<span className="text-green-400">"World"</span>, <span className="text-orange-400">25</span>);</div>
                  <div><span className="text-yellow-400">console</span>.<span className="text-yellow-400">log</span>(<span className="text-purple-400">message</span>); <span className="text-gray-500">// Output: Hello, World! You are 25 years old.</span></div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Documentation;