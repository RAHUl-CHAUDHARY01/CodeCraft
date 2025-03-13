import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Banner';
import UserProfile from './components/UserProfile';
import Documentation from './components/Documentation';
import CommunityForum from './components/CommunityForum';
import TemplatesLibrary from './components/TemplateSection';
import Dashboard from './components/CPHJudge/Dashboard';
import LandingPage from './components/LandingPage';
import CodeEditor from './components/CodeEditor';
import HomePage from './components/HomePage';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
// import ProjectManagement from './ProjectManagement';


function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<HomePage/>} />
        <Route path="/editor" element={<CodeEditor/>} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/community-forum" element={<CommunityForum />} />
        <Route path="/templates-library" element={<TemplatesLibrary />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/project-management" element={<ProjectManagement />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
