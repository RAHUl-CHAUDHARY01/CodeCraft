import React, { useState } from 'react';
import { FolderTree, Users, GitBranch, Plus, Share2, Clock, Settings, Search, ChevronDown, MoreHorizontal, File, Folder, X } from 'lucide-react';

const ProjectManagement = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "Website Redesign",
      description: "Redesigning the company website with new branding",
      collaborators: 4,
      lastUpdated: "2 hours ago",
      starred: true,
      files: [
        { id: 1, type: "folder", name: "Assets", children: [
          { id: 101, type: "file", name: "logo.svg", lastUpdated: "2 days ago" },
          { id: 102, type: "file", name: "hero-image.png", lastUpdated: "1 day ago" }
        ]},
        { id: 2, type: "folder", name: "Documentation", children: [
          { id: 201, type: "file", name: "requirements.docx", lastUpdated: "3 days ago" }
        ]},
        { id: 3, type: "file", name: "project-plan.pdf", lastUpdated: "5 hours ago" }
      ]
    },
    {
      id: 2,
      name: "Mobile App Development",
      description: "Creating a new mobile application for iOS and Android",
      collaborators: 6,
      lastUpdated: "Yesterday",
      starred: false,
      files: []
    },
    {
      id: 3,
      name: "Marketing Campaign",
      description: "Q2 digital marketing campaign planning",
      collaborators: 3,
      lastUpdated: "3 days ago",
      starred: true,
      files: []
    },
    {
      id: 4,
      name: "Product Roadmap",
      description: "2025 product feature planning",
      collaborators: 8,
      lastUpdated: "Last week",
      starred: false,
      files: []
    }
  ]);
  
  const [selectedProject, setSelectedProject] = useState(null);
  const [expandedFolders, setExpandedFolders] = useState({1: true});
  const [showNewProjectForm, setShowNewProjectForm] = useState(false);
  const [newProject, setNewProject] = useState({name: "", description: ""});
  const [activeTab, setActiveTab] = useState("files");
  const [searchTerm, setSearchTerm] = useState("");
  
  const toggleFolder = (folderId) => {
    setExpandedFolders({
      ...expandedFolders,
      [folderId]: !expandedFolders[folderId]
    });
  };
  
  const handleCreateProject = () => {
    const project = {
      id: projects.length + 1,
      name: newProject.name,
      description: newProject.description,
      collaborators: 1,
      lastUpdated: "Just now",
      starred: false,
      files: []
    };
    
    setProjects([...projects, project]);
    setNewProject({name: "", description: ""});
    setShowNewProjectForm(false);
  };
  
  const renderFileItem = (item, depth = 0) => {
    const paddingLeft = `${depth * 24}px`;
    
    if (item.type === "folder") {
      const isExpanded = expandedFolders[item.id];
      
      return (
        <div key={item.id}>
          <div
            className="flex items-center py-2 px-3 hover:bg-gray-100 rounded-md cursor-pointer"
            onClick={() => toggleFolder(item.id)}
            style={{ paddingLeft }}
          >
            <Folder className="w-5 h-5 text-blue-500 mr-2" />
            <span className="flex-grow">{item.name}</span>
            <ChevronDown className={`w-4 h-4 ${isExpanded ? 'transform rotate-180' : ''}`} />
          </div>
          
          {isExpanded && item.children && item.children.map(child => renderFileItem(child, depth + 1))}
        </div>
      );
    } else {
      return (
        <div
          key={item.id}
          className="flex items-center py-2 px-3 hover:bg-gray-100 rounded-md"
          style={{ paddingLeft }}
        >
          <File className="w-5 h-5 text-gray-400 mr-2" />
          <span className="flex-grow">{item.name}</span>
          <span className="text-gray-400 text-sm">{item.lastUpdated}</span>
        </div>
      );
    }
  };
  
  const filteredProjects = projects.filter(project => 
    project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 p-4 flex items-center justify-between">
        <h1 className="text-xl font-bold">Project Management</h1>
        
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search projects..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="w-5 h-5 absolute left-3 top-2.5 text-gray-400" />
            {searchTerm && (
              <button
                className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
                onClick={() => setSearchTerm("")}
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
          
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center">
              JD
            </div>
            <div className="ml-2">
              <div className="text-sm font-medium">John Doe</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main content */}
      <div className="flex-grow overflow-auto p-6">
        {selectedProject === null ? (
          <>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Your Projects</h2>
              <button
                className="bg-blue-600 text-white rounded-md py-2 px-4 flex items-center"
                onClick={() => setShowNewProjectForm(true)}
              >
                <Plus className="w-4 h-4 mr-2" />
                New Project
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map(project => (
                <div
                  key={project.id}
                  className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="p-5">
                    <h3 className="text-lg font-medium text-gray-900">{project.name}</h3>
                    <p className="text-gray-500 mt-1">{project.description}</p>
                    
                    <div className="mt-4 flex justify-between items-center">
                      <div className="flex items-center text-sm text-gray-500">
                        <Users className="w-4 h-4 mr-1" />
                        {project.collaborators} {project.collaborators === 1 ? 'member' : 'members'}
                      </div>
                      <div className="text-sm text-gray-500">
                        Updated {project.lastUpdated}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {filteredProjects.length === 0 && (
              <div className="text-center py-16">
                <FolderTree className="w-16 h-16 mx-auto text-gray-300" />
                <h3 className="mt-4 text-lg font-medium text-gray-900">No projects found</h3>
                <p className="mt-1 text-gray-500">
                  {searchTerm ? "Try using different search terms" : "Get started by creating a new project"}
                </p>
                <button
                  className="mt-4 bg-blue-600 text-white rounded-md px-4 py-2 inline-flex items-center"
                  onClick={() => setShowNewProjectForm(true)}
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Create Project
                </button>
              </div>
            )}
          </>
        ) : (
          <>
            <div className="mb-6 flex justify-between items-center">
              <div className="flex items-center">
                <button
                  className="mr-4 text-gray-500 hover:text-gray-700"
                  onClick={() => setSelectedProject(null)}
                >
                  <div className="flex items-center">
                    <ChevronDown className="w-5 h-5 transform rotate-90" />
                    <span>Back to projects</span>
                  </div>
                </button>
                <div>
                  <h1 className="text-2xl font-bold">{selectedProject.name}</h1>
                  <p className="text-gray-500">{selectedProject.description}</p>
                </div>
              </div>
              
              <div className="flex space-x-2">
                <button className="bg-gray-100 hover:bg-gray-200 rounded-md p-2">
                  <Share2 className="w-5 h-5" />
                </button>
                <button className="bg-gray-100 hover:bg-gray-200 rounded-md p-2">
                  <Settings className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            {/* Project tabs */}
            <div className="bg-white border-b border-gray-200 rounded-t-lg">
              <div className="px-4 flex space-x-4">
                <button
                  className={`py-4 border-b-2 ${activeTab === 'files' ? 'border-blue-500 text-blue-600' : 'border-transparent'}`}
                  onClick={() => setActiveTab('files')}
                >
                  <div className="flex items-center">
                    <FolderTree className="w-4 h-4 mr-2" />
                    Files
                  </div>
                </button>
                
                <button
                  className={`py-4 border-b-2 ${activeTab === 'collaboration' ? 'border-blue-500 text-blue-600' : 'border-transparent'}`}
                  onClick={() => setActiveTab('collaboration')}
                >
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    Collaboration
                  </div>
                </button>
                
                <button
                  className={`py-4 border-b-2 ${activeTab === 'history' ? 'border-blue-500 text-blue-600' : 'border-transparent'}`}
                  onClick={() => setActiveTab('history')}
                >
                  <div className="flex items-center">
                    <GitBranch className="w-4 h-4 mr-2" />
                    Version History
                  </div>
                </button>
              </div>
            </div>
            
            {/* Content area */}
            <div className="bg-white rounded-b-lg shadow-sm border border-gray-200 border-t-0">
              {activeTab === 'files' && (
                <>
                  <div className="border-b border-gray-200 p-4 flex justify-between items-center">
                    <div className="text-lg font-medium">Project Files</div>
                    
                    <div className="flex space-x-2">
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="Search files..."
                          className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                        <Search className="w-5 h-5 absolute left-3 top-2.5 text-gray-400" />
                      </div>
                      
                      <button className="bg-blue-600 text-white rounded-md px-4 py-2 flex items-center">
                        <Plus className="w-4 h-4 mr-2" />
                        Add File
                      </button>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    {selectedProject.files.length > 0 ? (
                      <div>
                        {selectedProject.files.map(file => renderFileItem(file))}
                      </div>
                    ) : (
                      <div className="text-center py-12">
                        <FolderTree className="w-12 h-12 mx-auto text-gray-300" />
                        <h3 className="mt-4 text-lg font-medium text-gray-900">No files yet</h3>
                        <p className="mt-1 text-gray-500">Get started by creating a new file or folder.</p>
                        <button className="mt-4 bg-blue-600 text-white rounded-md px-4 py-2 inline-flex items-center">
                          <Plus className="w-4 h-4 mr-2" />
                          Add First File
                        </button>
                      </div>
                    )}
                  </div>
                </>
              )}
              
              {activeTab === 'collaboration' && (
                <>
                  <div className="border-b border-gray-200 p-4">
                    <div className="text-lg font-medium">Collaborators</div>
                  </div>
                  
                  <div className="p-4">
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex space-x-2 items-center">
                        <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center">
                          JD
                        </div>
                        <div>
                          <div className="font-medium">John Doe (You)</div>
                          <div className="text-sm text-gray-500">Owner</div>
                        </div>
                      </div>
                    </div>
                    
                    <button className="w-full border border-gray-300 text-gray-700 rounded-md py-2 px-4 flex items-center justify-center mt-6">
                      <Share2 className="w-4 h-4 mr-2" />
                      Invite Collaborators
                    </button>
                  </div>
                </>
              )}
              
              {activeTab === 'history' && (
                <>
                  <div className="border-b border-gray-200 p-4">
                    <div className="text-lg font-medium">Version History</div>
                  </div>
                  
                  <div className="p-4">
                    <div className="border-l-2 border-gray-200 pl-4 py-2">
                      <div className="flex justify-between items-start mb-1">
                        <div>
                          <div className="font-medium">Initial project setup</div>
                          <div className="text-sm text-gray-500">Added project structure and main files</div>
                        </div>
                        <div className="text-sm text-gray-500">2 hours ago</div>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs mr-2">
                          JD
                        </div>
                        <span>John Doe</span>
                      </div>
                    </div>
                    
                    <div className="border-l-2 border-gray-200 pl-4 py-2 mt-4">
                      <div className="flex justify-between items-start mb-1">
                        <div>
                          <div className="font-medium">Project created</div>
                          <div className="text-sm text-gray-500">Initial project creation</div>
                        </div>
                        <div className="text-sm text-gray-500">1 day ago</div>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs mr-2">
                          JD
                        </div>
                        <span>John Doe</span>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </>
        )}
      </div>
      
      {/* New Project Modal */}
      {showNewProjectForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
            <div className="border-b border-gray-200 p-4">
              <h2 className="text-lg font-medium">Create New Project</h2>
            </div>
            
            <div className="p-4">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Project Name</label>
                <input
                  type="text"
                  value={newProject.name}
                  onChange={(e) => setNewProject({...newProject, name: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter project name"
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea
                  value={newProject.description}
                  onChange={(e) => setNewProject({...newProject, description: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter project description"
                  rows={3}
                />
              </div>
            </div>
            
            <div className="border-t border-gray-200 p-4 flex justify-end space-x-2">
              <button
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700"
                onClick={() => setShowNewProjectForm(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded-md"
                onClick={handleCreateProject}
                disabled={!newProject.name}
              >
                Create Project
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectManagement;