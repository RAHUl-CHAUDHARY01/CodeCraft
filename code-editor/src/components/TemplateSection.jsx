import React, { useState, useEffect } from 'react';
import { Search, Code, Book, Star, Tag, Users, Clock, ChevronDown, Filter, ExternalLink } from 'lucide-react';

const TemplatesLibrary = () => {
  // State for active filters and search
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeDifficulty, setActiveDifficulty] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  
  // Sample template data
  const templates = [
    {
      id: 1,
      title: "React Data Fetching Hook",
      description: "A custom hook for fetching data with loading and error states",
      language: "javascript",
      category: "frontend",
      difficulty: "intermediate",
      stars: 142,
      author: "sarahdev",
      updatedAt: "2025-01-15",
      community: true
    },
    {
      id: 2,
      title: "Python FastAPI CRUD Operations",
      description: "Complete CRUD implementation with FastAPI and SQLAlchemy",
      language: "python",
      category: "backend",
      difficulty: "beginner",
      stars: 89,
      author: "pythonmaster",
      updatedAt: "2025-02-28",
      community: false
    },
    {
      id: 3,
      title: "GraphQL Schema with TypeScript",
      description: "Type-safe GraphQL schema definition with code-gen integration",
      language: "typescript",
      category: "backend",
      difficulty: "advanced",
      stars: 231,
      author: "graphqlpro",
      updatedAt: "2025-03-01",
      community: true
    },
    {
      id: 4,
      title: "CSS Grid Layout System",
      description: "Responsive grid layout system with CSS variables",
      language: "css",
      category: "frontend",
      difficulty: "beginner",
      stars: 76,
      author: "cssartist",
      updatedAt: "2025-02-10",
      community: true
    },
    {
      id: 5,
      title: "Go Microservice Template",
      description: "Scalable microservice architecture template with Go and Docker",
      language: "go",
      category: "backend",
      difficulty: "advanced",
      stars: 315,
      author: "gopher",
      updatedAt: "2025-01-20",
      community: false
    },
    {
      id: 6,
      title: "React Testing Library Examples",
      description: "Component testing examples using React Testing Library",
      language: "javascript",
      category: "testing",
      difficulty: "intermediate",
      stars: 128,
      author: "testdriven",
      updatedAt: "2025-02-15",
      community: true
    },
  ];
  
  // Filtered templates based on active filters and search query
  const filteredTemplates = templates.filter(template => {
    return (
      (activeCategory === 'all' || template.category === activeCategory) &&
      (activeDifficulty === 'all' || template.difficulty === activeDifficulty) &&
      (searchQuery === '' || 
        template.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        template.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        template.language.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  });
  
  // Languages with color mappings
  const languageColors = {
    javascript: 'bg-yellow-200 text-yellow-800',
    typescript: 'bg-blue-200 text-blue-800',
    python: 'bg-green-200 text-green-800',
    css: 'bg-pink-200 text-pink-800',
    go: 'bg-cyan-200 text-cyan-800'
  };
  
  // Difficulty badges with color mappings
  const difficultyBadges = {
    beginner: 'bg-emerald-100 text-emerald-800',
    intermediate: 'bg-orange-100 text-orange-800',
    advanced: 'bg-red-100 text-red-800'
  };
  
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Templates & Examples Library</h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Explore our collection of pre-built code templates, examples, and learning resources for developers at all skill levels.
          </p>
          
          {/* Search bar */}
          <div className="mt-8 relative max-w-2xl">
            <input
              type="text"
              placeholder="Search templates, languages, or categories..."
              className="w-full py-3 px-5 pr-12 rounded-lg border-none focus:ring-2 focus:ring-indigo-300 text-gray-800"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute right-4 top-3.5 text-gray-500" size={20} />
          </div>
        </div>
      </header>
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar filters for desktop */}
          <aside className="hidden md:block w-64 space-y-6">
            <div className="bg-white rounded-lg shadow p-5">
              <h3 className="font-medium text-gray-800 mb-4">Categories</h3>
              <ul className="space-y-2">
                <li>
                  <button 
                    className={`w-full text-left px-3 py-2 rounded-md ${activeCategory === 'all' ? 'bg-indigo-50 text-indigo-700' : 'text-gray-600 hover:bg-gray-50'}`}
                    onClick={() => setActiveCategory('all')}
                  >
                    All Categories
                  </button>
                </li>
                <li>
                  <button 
                    className={`w-full text-left px-3 py-2 rounded-md ${activeCategory === 'frontend' ? 'bg-indigo-50 text-indigo-700' : 'text-gray-600 hover:bg-gray-50'}`}
                    onClick={() => setActiveCategory('frontend')}
                  >
                    Frontend
                  </button>
                </li>
                <li>
                  <button 
                    className={`w-full text-left px-3 py-2 rounded-md ${activeCategory === 'backend' ? 'bg-indigo-50 text-indigo-700' : 'text-gray-600 hover:bg-gray-50'}`}
                    onClick={() => setActiveCategory('backend')}
                  >
                    Backend
                  </button>
                </li>
                <li>
                  <button 
                    className={`w-full text-left px-3 py-2 rounded-md ${activeCategory === 'testing' ? 'bg-indigo-50 text-indigo-700' : 'text-gray-600 hover:bg-gray-50'}`}
                    onClick={() => setActiveCategory('testing')}
                  >
                    Testing
                  </button>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow p-5">
              <h3 className="font-medium text-gray-800 mb-4">Difficulty</h3>
              <ul className="space-y-2">
                <li>
                  <button 
                    className={`w-full text-left px-3 py-2 rounded-md ${activeDifficulty === 'all' ? 'bg-indigo-50 text-indigo-700' : 'text-gray-600 hover:bg-gray-50'}`}
                    onClick={() => setActiveDifficulty('all')}
                  >
                    All Levels
                  </button>
                </li>
                <li>
                  <button 
                    className={`w-full text-left px-3 py-2 rounded-md ${activeDifficulty === 'beginner' ? 'bg-indigo-50 text-indigo-700' : 'text-gray-600 hover:bg-gray-50'}`}
                    onClick={() => setActiveDifficulty('beginner')}
                  >
                    Beginner
                  </button>
                </li>
                <li>
                  <button 
                    className={`w-full text-left px-3 py-2 rounded-md ${activeDifficulty === 'intermediate' ? 'bg-indigo-50 text-indigo-700' : 'text-gray-600 hover:bg-gray-50'}`}
                    onClick={() => setActiveDifficulty('intermediate')}
                  >
                    Intermediate
                  </button>
                </li>
                <li>
                  <button 
                    className={`w-full text-left px-3 py-2 rounded-md ${activeDifficulty === 'advanced' ? 'bg-indigo-50 text-indigo-700' : 'text-gray-600 hover:bg-gray-50'}`}
                    onClick={() => setActiveDifficulty('advanced')}
                  >
                    Advanced
                  </button>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow p-5">
              <h3 className="font-medium text-gray-800 mb-4">Learning Resources</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600 px-3 py-2 hover:bg-gray-50 rounded-md">
                  <Book size={16} className="mr-2" />
                  <span>Tutorials</span>
                </li>
                <li className="flex items-center text-gray-600 px-3 py-2 hover:bg-gray-50 rounded-md">
                  <Code size={16} className="mr-2" />
                  <span>Documentation</span>
                </li>
                <li className="flex items-center text-gray-600 px-3 py-2 hover:bg-gray-50 rounded-md">
                  <ExternalLink size={16} className="mr-2" />
                  <span>External Resources</span>
                </li>
              </ul>
            </div>
          </aside>
          
          {/* Mobile filters */}
          <div className="md:hidden w-full mb-4">
            <button 
              className="w-full flex items-center justify-between bg-white rounded-lg shadow p-4"
              onClick={() => setShowMobileFilters(!showMobileFilters)}
            >
              <span className="font-medium flex items-center">
                <Filter size={18} className="mr-2" /> Filters
              </span>
              <ChevronDown size={20} className={`transition-transform ${showMobileFilters ? 'rotate-180' : ''}`} />
            </button>
            
            {showMobileFilters && (
              <div className="mt-2 bg-white rounded-lg shadow p-4 space-y-4">
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">Categories</h3>
                  <div className="flex flex-wrap gap-2">
                    <button 
                      className={`px-3 py-1 rounded-full text-sm ${activeCategory === 'all' ? 'bg-indigo-100 text-indigo-700' : 'bg-gray-100 text-gray-700'}`}
                      onClick={() => setActiveCategory('all')}
                    >
                      All
                    </button>
                    <button 
                      className={`px-3 py-1 rounded-full text-sm ${activeCategory === 'frontend' ? 'bg-indigo-100 text-indigo-700' : 'bg-gray-100 text-gray-700'}`}
                      onClick={() => setActiveCategory('frontend')}
                    >
                      Frontend
                    </button>
                    <button 
                      className={`px-3 py-1 rounded-full text-sm ${activeCategory === 'backend' ? 'bg-indigo-100 text-indigo-700' : 'bg-gray-100 text-gray-700'}`}
                      onClick={() => setActiveCategory('backend')}
                    >
                      Backend
                    </button>
                    <button 
                      className={`px-3 py-1 rounded-full text-sm ${activeCategory === 'testing' ? 'bg-indigo-100 text-indigo-700' : 'bg-gray-100 text-gray-700'}`}
                      onClick={() => setActiveCategory('testing')}
                    >
                      Testing
                    </button>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">Difficulty</h3>
                  <div className="flex flex-wrap gap-2">
                    <button 
                      className={`px-3 py-1 rounded-full text-sm ${activeDifficulty === 'all' ? 'bg-indigo-100 text-indigo-700' : 'bg-gray-100 text-gray-700'}`}
                      onClick={() => setActiveDifficulty('all')}
                    >
                      All Levels
                    </button>
                    <button 
                      className={`px-3 py-1 rounded-full text-sm ${activeDifficulty === 'beginner' ? 'bg-indigo-100 text-indigo-700' : 'bg-gray-100 text-gray-700'}`}
                      onClick={() => setActiveDifficulty('beginner')}
                    >
                      Beginner
                    </button>
                    <button 
                      className={`px-3 py-1 rounded-full text-sm ${activeDifficulty === 'intermediate' ? 'bg-indigo-100 text-indigo-700' : 'bg-gray-100 text-gray-700'}`}
                      onClick={() => setActiveDifficulty('intermediate')}
                    >
                      Intermediate
                    </button>
                    <button 
                      className={`px-3 py-1 rounded-full text-sm ${activeDifficulty === 'advanced' ? 'bg-indigo-100 text-indigo-700' : 'bg-gray-100 text-gray-700'}`}
                      onClick={() => setActiveDifficulty('advanced')}
                    >
                      Advanced
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Template cards */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">
                {filteredTemplates.length} {filteredTemplates.length === 1 ? 'Template' : 'Templates'} Available
              </h2>
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition">
                Submit Template
              </button>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredTemplates.map(template => (
                <div key={template.id} className="bg-white rounded-lg shadow hover:shadow-md transition">
                  <div className="p-5">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-semibold text-gray-800">{template.title}</h3>
                      <div className="flex items-center">
                        <span className="text-gray-500 text-sm mr-1">{template.stars}</span>
                        <Star size={16} className="text-yellow-500 fill-yellow-500" />
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{template.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${languageColors[template.language] || 'bg-gray-200 text-gray-800'}`}>
                        {template.language}
                      </span>
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${difficultyBadges[template.difficulty] || 'bg-gray-200 text-gray-800'}`}>
                        {template.difficulty.charAt(0).toUpperCase() + template.difficulty.slice(1)}
                      </span>
                      {template.community && (
                        <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                          Community
                        </span>
                      )}
                    </div>
                    
                    <div className="flex justify-between items-center text-sm text-gray-500">
                      <div className="flex items-center">
                        <Users size={16} className="mr-1" />
                        <span>{template.author}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock size={16} className="mr-1" />
                        <span>Updated {template.updatedAt}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-100 px-5 py-4 flex justify-between items-center">
                    <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium flex items-center">
                      <Code size={16} className="mr-1" />
                      View Code
                    </button>
                    <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium flex items-center">
                      <Book size={16} className="mr-1" />
                      Learning Resources
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            {filteredTemplates.length === 0 && (
              <div className="bg-white rounded-lg shadow p-8 text-center">
                <div className="text-gray-400 mb-4">
                  <Search size={48} className="mx-auto" />
                </div>
                <h3 className="text-xl font-medium text-gray-800 mb-2">No templates found</h3>
                <p className="text-gray-600">
                  Try adjusting your search or filters to find what you're looking for.
                </p>
              </div>
            )}
            
            {filteredTemplates.length > 0 && (
              <div className="mt-8 text-center">
                <button className="px-6 py-3 bg-white shadow text-indigo-600 rounded-lg hover:bg-indigo-50 transition font-medium">
                  Load More Templates
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <footer className="bg-gray-800 text-white py-12 mt-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Templates Library</h3>
              <p className="text-gray-400">
                A collection of high-quality, community-driven code templates and examples for developers of all skill levels.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Submit Template</a></li>
                <li><a href="#" className="hover:text-white">Learning Resources</a></li>
                <li><a href="#" className="hover:text-white">Community Guidelines</a></li>
                <li><a href="#" className="hover:text-white">About Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Join Our Community</h3>
              <p className="text-gray-400 mb-4">
                Stay updated with the latest templates and resources.
              </p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-4 py-2 rounded-l-lg flex-1 text-gray-800 focus:outline-none"
                />
                <button className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-r-lg text-white font-medium transition">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-gray-400 text-sm text-center">
            &copy; 2025 Templates Library. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TemplatesLibrary;