import React, { useState } from 'react';
import { Bell, Code, Users, MessageSquare, HelpCircle, Search, Plus, ChevronUp, MessageCircle, Heart, Share2, Eye } from 'lucide-react';

const CommunityForum = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  // Sample data for forum posts
  const posts = [
    {
      id: 1,
      title: "How to implement JWT authentication in React?",
      author: "devJane",
      avatar: "/api/placeholder/30/30",
      category: "coding",
      tags: ["react", "authentication", "jwt"],
      replies: 12,
      likes: 24,
      views: 156,
      isPinned: false,
      isNew: true,
      createdAt: "2 hours ago"
    },
    {
      id: 2,
      title: "Check out my portfolio website built with React and Tailwind",
      author: "webMaster42",
      avatar: "/api/placeholder/30/30",
      category: "projects",
      tags: ["showcase", "portfolio", "tailwind"],
      replies: 8,
      likes: 35,
      views: 210,
      isPinned: false,
      isNew: false,
      createdAt: "1 day ago"
    },
    {
      id: 3,
      title: "🎉 New Feature Alert: Real-time Collaboration Tools",
      author: "adminSarah",
      avatar: "/api/placeholder/30/30",
      category: "announcements",
      tags: ["update", "new-feature"],
      replies: 24,
      likes: 87,
      views: 543,
      isPinned: true,
      isNew: true,
      createdAt: "3 days ago"
    },
    {
      id: 4,
      title: "Having trouble with React Router v6 - routes not working",
      author: "newbieDev",
      avatar: "/api/placeholder/30/30",
      category: "support",
      tags: ["help", "react-router", "debugging"],
      replies: 18,
      likes: 7,
      views: 98,
      isPinned: false,
      isNew: false,
      createdAt: "4 days ago"
    },
    {
      id: 5,
      title: "Node.js vs Deno - Performance comparison and use cases",
      author: "backendGuru",
      avatar: "/api/placeholder/30/30",
      category: "coding",
      tags: ["node", "deno", "backend"],
      replies: 32,
      likes: 56,
      views: 312,
      isPinned: false,
      isNew: false,
      createdAt: "1 week ago"
    }
  ];
  
  // Filter posts based on active tab
  const filteredPosts = activeTab === 'all' 
    ? posts 
    : posts.filter(post => post.category === activeTab);

  // Sort posts to show pinned posts first
  const sortedPosts = [...filteredPosts].sort((a, b) => {
    if (a.isPinned && !b.isPinned) return -1;
    if (!a.isPinned && b.isPinned) return 1;
    return 0;
  });

  const getCategoryIcon = (category) => {
    switch(category) {
      case 'coding': return <Code size={18} />;
      case 'projects': return <MessageSquare size={18} />;
      case 'announcements': return <Bell size={18} />;
      case 'support': return <HelpCircle size={18} />;
      default: return <MessageCircle size={18} />;
    }
  };
  
  const getCategoryColor = (category) => {
    switch(category) {
      case 'coding': return 'bg-indigo-100 text-indigo-800';
      case 'projects': return 'bg-emerald-100 text-emerald-800';
      case 'announcements': return 'bg-amber-100 text-amber-800';
      case 'support': return 'bg-rose-100 text-rose-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">Community Forum</h1>
            <div className="flex items-center space-x-4">
              <button className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full">
                <Bell size={20} className="text-gray-600" />
              </button>
              <div className="h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center text-white font-medium">
                JS
              </div>
            </div>
          </div>
        </div>
      </header>
      
      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow">
              <div className="p-4">
                <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg flex items-center justify-center gap-2">
                  <Plus size={18} />
                  <span>New Post</span>
                </button>
              </div>
              
              <div className="px-4 py-2">
                <h3 className="font-medium text-gray-900 mb-2">Categories</h3>
                <nav className="space-y-1">
                  <button 
                    onClick={() => setActiveTab('all')}
                    className={`w-full text-left px-3 py-2 rounded-md flex items-center gap-3 ${
                      activeTab === 'all' ? 'bg-indigo-50 text-indigo-700' : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <Users size={18} />
                    <span>All Discussions</span>
                  </button>
                  <button 
                    onClick={() => setActiveTab('coding')}
                    className={`w-full text-left px-3 py-2 rounded-md flex items-center gap-3 ${
                      activeTab === 'coding' ? 'bg-indigo-50 text-indigo-700' : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <Code size={18} />
                    <span>Coding Questions</span>
                  </button>
                  <button 
                    onClick={() => setActiveTab('projects')}
                    className={`w-full text-left px-3 py-2 rounded-md flex items-center gap-3 ${
                      activeTab === 'projects' ? 'bg-indigo-50 text-indigo-700' : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <MessageSquare size={18} />
                    <span>Share Projects</span>
                  </button>
                  <button 
                    onClick={() => setActiveTab('announcements')}
                    className={`w-full text-left px-3 py-2 rounded-md flex items-center gap-3 ${
                      activeTab === 'announcements' ? 'bg-indigo-50 text-indigo-700' : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <Bell size={18} />
                    <span>Announcements</span>
                  </button>
                  <button 
                    onClick={() => setActiveTab('support')}
                    className={`w-full text-left px-3 py-2 rounded-md flex items-center gap-3 ${
                      activeTab === 'support' ? 'bg-indigo-50 text-indigo-700' : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <HelpCircle size={18} />
                    <span>User Support</span>
                  </button>
                </nav>
              </div>
              
              <div className="px-4 py-4 border-t border-gray-200">
                <h3 className="font-medium text-gray-900 mb-2">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full">react</span>
                  <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full">javascript</span>
                  <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full">node.js</span>
                  <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full">api</span>
                  <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full">tailwind</span>
                  <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full">typescript</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Main forum content */}
          <div className="lg:col-span-3">
            {/* Search and filters */}
            <div className="bg-white rounded-lg shadow p-4 mb-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-grow">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search size={20} className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search discussions..."
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div className="flex gap-2">
                  <select className="block w-full py-2 pl-3 pr-10 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                    <option>Latest</option>
                    <option>Most Popular</option>
                    <option>Most Replies</option>
                  </select>
                </div>
              </div>
            </div>
            
            {/* Discussion list */}
            <div className="bg-white rounded-lg shadow divide-y divide-gray-200">
              {sortedPosts.map(post => (
                <div key={post.id} className={`p-6 ${post.isPinned ? 'bg-indigo-50' : ''}`}>
                  <div className="flex items-start">
                    <img src={post.avatar} alt={post.author} className="h-10 w-10 rounded-full mr-4" />
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center mb-1">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getCategoryColor(post.category)}`}>
                          {getCategoryIcon(post.category)}
                          <span className="ml-1 capitalize">{post.category}</span>
                        </span>
                        {post.isPinned && (
                          <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            <ChevronUp size={14} className="mr-1" />
                            Pinned
                          </span>
                        )}
                        {post.isNew && (
                          <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            New
                          </span>
                        )}
                      </div>
                      
                      <h3 className="text-lg font-medium text-gray-900 truncate hover:text-indigo-600 cursor-pointer">
                        {post.title}
                      </h3>
                      
                      <div className="mt-1 flex items-center text-sm text-gray-500">
                        <span>Posted by <span className="font-medium text-gray-900">{post.author}</span></span>
                        <span className="mx-1">•</span>
                        <span>{post.createdAt}</span>
                      </div>
                      
                      <div className="mt-2 flex flex-wrap gap-1">
                        {post.tags.map(tag => (
                          <span key={tag} className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="ml-4 flex-shrink-0 flex flex-col items-end space-y-2 text-sm text-gray-500">
                      <div className="flex items-center">
                        <MessageCircle size={16} className="mr-1" />
                        <span>{post.replies} replies</span>
                      </div>
                      <div className="flex items-center">
                        <Heart size={16} className="mr-1" />
                        <span>{post.likes} likes</span>
                      </div>
                      <div className="flex items-center">
                        <Eye size={16} className="mr-1" />
                        <span>{post.views} views</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Pagination */}
            <div className="mt-6 flex justify-between items-center">
              <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                Previous
              </button>
              <div className="hidden sm:flex gap-1">
                <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md">1</button>
                <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">2</button>
                <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">3</button>
                <span className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700">...</span>
                <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">8</button>
              </div>
              <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                Next
              </button>
            </div>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-500">
                © 2025 DevConnect Community
              </div>
              <div className="text-sm">
                <a href="#" className="text-gray-600 hover:text-gray-900">Terms</a>
              </div>
              <div className="text-sm">
                <a href="#" className="text-gray-600 hover:text-gray-900">Privacy</a>
              </div>
            </div>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">GitHub</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Discord</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CommunityForum;