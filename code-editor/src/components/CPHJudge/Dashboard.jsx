import React, { useState } from 'react';
import { 
  Code,
  Clock, 
  FileText, 
  Folder, 
  LineChart, 
  PlusCircle, 
  Search, 
  Settings, 
  Star,
  Bell,
  Zap,
  UserCircle,
  LogOut,
  BookOpen,
  Layout,
  Terminal,
  Users,
  MessageSquare,
  ChevronRight,
  ExternalLink,
  Bookmark,
  Hash
} from 'lucide-react';
import CodeEditor from '../CodeEditor';
import person3 from '../../assets/person3.png';
const CodeCraftDashboard = () => {
  // Sample data
  const savedProjects = [
    { id: 1, name: 'TodoList API', language: 'JavaScript', lastEdited: '2 hours ago', starred: true },
    { id: 2, name: 'Image Processing Script', language: 'Python', lastEdited: '1 day ago', starred: true },
    { id: 3, name: 'Data Structures', language: 'Java', lastEdited: '3 days ago', starred: false },
    { id: 4, name: 'Web Scraper', language: 'Python', lastEdited: '1 week ago', starred: false },
    { id: 5, name: 'Sorting Algorithms', language: 'C++', lastEdited: '2 weeks ago', starred: false }
  ];

  const recentActivity = [
    { id: 1, action: 'Compiled', item: 'TodoList API', language: 'JavaScript', time: '2 hours ago', status: 'success' },
    { id: 2, action: 'Edited', item: 'Image Processing Script', language: 'Python', time: '5 hours ago', status: 'normal' },
    { id: 3, action: 'Created', item: 'New Java Project', language: 'Java', time: '1 day ago', status: 'normal' },
    { id: 4, action: 'Compilation Error', item: 'Web Scraper', language: 'Python', time: '2 days ago', status: 'error' }
  ];

  const recommendedTemplates = [
    { id: 1, name: 'RESTful API', language: 'JavaScript', difficulty: 'Intermediate', downloads: '2.4k' },
    { id: 2, name: 'Machine Learning Starter', language: 'Python', difficulty: 'Advanced', downloads: '3.5k' },
    { id: 3, name: 'Data Structures Library', language: 'Java', difficulty: 'Intermediate', downloads: '1.8k' },
    { id: 4, name: 'Responsive Web Template', language: 'HTML/CSS', difficulty: 'Beginner', downloads: '4.1k' }
  ];

  const usageStatistics = [
    { day: 'Mon', compilations: 12, projects: 2 },
    { day: 'Tue', compilations: 15, projects: 3 },
    { day: 'Wed', compilations: 10, projects: 1 },
    { day: 'Thu', compilations: 22, projects: 4 },
    { day: 'Fri', compilations: 18, projects: 2 },
    { day: 'Sat', compilations: 8, projects: 1 },
    { day: 'Sun', compilations: 5, projects: 0 },
  ];

  const quickDocs = [
    { id: 1, title: 'JavaScript Reference', icon: BookOpen, language: 'JavaScript' },
    { id: 2, title: 'Python Documentation', icon: BookOpen, language: 'Python' },
    { id: 3, title: 'CodeCraft Shortcuts', icon: FileText, language: null },
    { id: 4, title: 'Java API Guide', icon: FileText, language: 'Java' }
  ];

  const getLanguageColor = (language) => {
    const colors = {
      'JavaScript': 'bg-yellow-100 text-yellow-700',
      'Python': 'bg-blue-100 text-blue-700',
      'Java': 'bg-red-100 text-red-700',
      'C++': 'bg-purple-100 text-purple-700',
      'HTML/CSS': 'bg-orange-100 text-orange-700'
    };
    return colors[language] || 'bg-gray-100 text-gray-700';
  };

  const getStatusColor = (status) => {
    const colors = {
      'success': 'text-green-600',
      'error': 'text-red-600',
      'normal': 'text-gray-600'
    };
    return colors[status] || 'text-gray-600';
  };

  return (
    <div className="flex h-screen bg-gray-50 text-gray-800">
      {/* Main content */}
      <div className="flex-1">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 py-2 px-6 flex items-center justify-between">
          <div className="flex items-center w-full max-w-md">
            <div className="relative w-full">
              <input 
                type="text" 
                placeholder="Search projects, templates, docs..." 
                className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
              <Search size={18} className="absolute left-3 top-2.5 text-gray-400" />
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-gray-100 relative">
              <Bell size={20} />
              <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full"></span>
            </button>
            <div className="flex items-center ">
              <img src={person3} className='rounded-full w-8 h-8'/>
              <span className="hidden md:inline-block font-medium">Rahul Kumar</span>
            </div>
          </div>
        </header>
        
        {/* Dashboard content */}
        <main className="p-6">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md flex items-center hover:bg-indigo-700">
              <PlusCircle size={18} className="mr-2" />
              New Project
            </button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            {/* Quick stats */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-lg font-semibold mb-4">Quick Overview</h2>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-600">{savedProjects.length}</div>
                  <div className="text-sm text-gray-500">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-600">87</div>
                  <div className="text-sm text-gray-500">Compilations</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">92%</div>
                  <div className="text-sm text-gray-500">Success Rate</div>
                </div>
              </div>
            </div>
            
            {/* Recent activity */}
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">Recent Activity</h2>
                <button className="text-indigo-600 text-sm flex items-center">
                  View all <ChevronRight size={14} className="ml-1" />
                </button>
              </div>
              <div className="space-y-3">
                {recentActivity.slice(0, 3).map(activity => (
                  <div key={activity.id} className="flex items-start">
                    <div className="mt-1 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                      <Clock size={14} className={getStatusColor(activity.status)} />
                    </div>
                    <div className="ml-3">
                      <div className="text-sm">
                        <span className={`font-medium ${getStatusColor(activity.status)}`}>{activity.action}</span>: {activity.item}
                      </div>
                      <div className="flex items-center text-xs text-gray-500">
                        <span className={`px-1.5 py-0.5 rounded-sm mr-2 ${getLanguageColor(activity.language)}`}>
                          {activity.language}
                        </span>
                        {activity.time}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Quick docs */}
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">Quick Documentation</h2>
                <button className="text-indigo-600 text-sm flex items-center">
                  All docs <ChevronRight size={14} className="ml-1" />
                </button>
              </div>
              <div className="space-y-3">
                {quickDocs.slice(0, 3).map(doc => (
                  <button key={doc.id} className="w-full flex items-center p-2 rounded-md hover:bg-gray-50">
                    <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
                      <doc.icon size={14} className="text-indigo-600" />
                    </div>
                    <div className="ml-3 flex items-center justify-between w-full">
                      <span className="text-sm">{doc.title}</span>
                      {doc.language && (
                        <span className={`text-xs px-1.5 py-0.5 rounded-sm ${getLanguageColor(doc.language)}`}>
                          {doc.language}
                        </span>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Saved projects */}
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">Saved Projects</h2>
                <button className="text-indigo-600 text-sm flex items-center">
                  View all <ChevronRight size={14} className="ml-1" />
                </button>
              </div>
              <div className="space-y-3">
                {savedProjects.slice(0, 4).map(project => (
                  <div key={project.id} className="flex items-center justify-between p-3 rounded-md hover:bg-gray-50 cursor-pointer">
                    <div className="flex items-center">
                      <div className={`w-10 h-10 rounded-md flex items-center justify-center flex-shrink-0 ${getLanguageColor(project.language)}`}>
                        <Hash size={16} />
                      </div>
                      <div className="ml-3">
                        <div className="font-medium">{project.name}</div>
                        <div className="text-xs text-gray-500">
                          <span className={`inline-block px-1.5 py-0.5 rounded-sm mr-2 ${getLanguageColor(project.language)}`}>
                            {project.language}
                          </span>
                          Last edited {project.lastEdited}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <button className="text-gray-400 hover:text-indigo-600 mr-2">
                        {project.starred ? <Star className="fill-yellow-400 text-yellow-400" size={18} /> : <Star size={18} />}
                      </button>
                      <button className="text-gray-400 hover:text-indigo-600">
                        <ExternalLink size={18} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Recommended templates */}
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">Recommended Templates</h2>
                <button className="text-indigo-600 text-sm flex items-center">
                  Explore all <ChevronRight size={14} className="ml-1" />
                </button>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {recommendedTemplates.map(template => (
                  <div key={template.id} className="p-3 border border-gray-200 rounded-md hover:border-indigo-300 hover:shadow-sm cursor-pointer">
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-xs font-medium px-2 py-1 rounded-full ${getLanguageColor(template.language)}`}>
                        {template.language}
                      </span>
                      <span className="text-xs text-gray-500">{template.downloads} uses</span>
                    </div>
                    <h3 className="font-medium text-sm mb-1">{template.name}</h3>
                    <div className="text-xs text-gray-500">
                      Difficulty: <span className="text-indigo-600">{template.difficulty}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Usage statistics */}
          <div className="bg-white p-6 rounded-lg shadow mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Usage Statistics</h2>
              <div className="flex space-x-2">
                <button className="px-3 py-1 text-sm rounded-md bg-indigo-100 text-indigo-700">This Week</button>
                <button className="px-3 py-1 text-sm rounded-md bg-gray-100 text-gray-700">Month</button>
                <button className="px-3 py-1 text-sm rounded-md bg-gray-100 text-gray-700">Year</button>
              </div>
            </div>
            <div className="h-64 flex items-end space-x-2">
              {usageStatistics.map((stat, index) => (
                <div key={index} className="flex-1 flex flex-col items-center">
                  <div className="w-full px-1 flex flex-col items-center">
                    <div 
                      className="w-full bg-indigo-500 rounded-t-sm" 
                      style={{ height: `${(stat.compilations / 22) * 150}px` }}
                    ></div>
                    <div 
                      className="w-full bg-green-500 rounded-t-sm mt-1" 
                      style={{ height: `${(stat.projects / 4) * 60}px` }}
                    ></div>
                  </div>
                  <div className="mt-2 text-xs text-gray-500">{stat.day}</div>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center mt-4 text-sm text-gray-600">
              <div className="flex items-center mr-4">
                <div className="w-3 h-3 bg-indigo-500 rounded-sm mr-2"></div>
                <span>Compilations</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-sm mr-2"></div>
                <span>New Projects</span>
              </div>
            </div>
          </div>
          
          {/* Learning resources */}
          <div className="bg-white p-6 rounded-lg shadow mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Continue Learning</h2>
              <button className="text-indigo-600 text-sm flex items-center">
                View all courses <ChevronRight size={14} className="ml-1" />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="border border-gray-200 rounded-lg overflow-hidden hover:border-indigo-300 cursor-pointer">
                <div className="h-32 bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">JavaScript</span>
                </div>
                <div className="p-4">
                  <h3 className="font-medium mb-1">Modern JavaScript Essentials</h3>
                  <div className="text-sm text-gray-500 mb-2">12 tutorials • 4 completed</div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '33%' }}></div>
                  </div>
                </div>
              </div>
              <div className="border border-gray-200 rounded-lg overflow-hidden hover:border-indigo-300 cursor-pointer">
                <div className="h-32 bg-gradient-to-r from-green-500 to-teal-600 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">Python</span>
                </div>
                <div className="p-4">
                  <h3 className="font-medium mb-1">Data Analysis with Python</h3>
                  <div className="text-sm text-gray-500 mb-2">8 tutorials • 1 completed</div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '12%' }}></div>
                  </div>
                </div>
              </div>
              <div className="border border-gray-200 rounded-lg overflow-hidden hover:border-indigo-300 cursor-pointer">
                <div className="h-32 bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">React</span>
                </div>
                <div className="p-4">
                  <h3 className="font-medium mb-1">Building Modern React Apps</h3>
                  <div className="text-sm text-gray-500 mb-2">15 tutorials • 0 completed</div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '0%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CodeCraftDashboard;