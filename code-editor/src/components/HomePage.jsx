import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setcurrentSetting } from "../features/homepage.js";
import CodeEditor from './CodeEditor.jsx';
import CodeCraftDashboard from './CPHJudge/Dashboard.jsx';
import Documentation from './Documentation.jsx';
import CommunityForum from './CommunityForum.jsx';
import { Bookmark, BookOpen, Code, Folder, Layout, MessageSquare, PlusCircle, Settings, Terminal } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ProjectManagement from './ProjectManagement.jsx';
import TemplatesLibrary from './TemplateSection.jsx';
import Account from './UserSettings/AccountSetting/Account.jsx';
import ProfileCard from './UserProfile.jsx';

const HomePage = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {

    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [width]);
  const dispatch = useDispatch()

  const currentSetting = useSelector((state) => state.currentSetting.value)

  // const [currentPage, setCurrentPage] = useState('Code Editor');
const navigate = useNavigate();
  const renderContent = () => {
    switch (currentSetting) {
      case 'Code Editor':
        return <div><CodeEditor/></div>;
      case 'Dashboard':
        return <div><CodeCraftDashboard/></div>;
      case 'Projects':
        return <div><ProjectManagement/></div>;
      case 'Templates':
        return <div><TemplatesLibrary/></div>;
      case 'Documentation':
        return <div><Documentation/></div>;
      case 'Community':
        return <div><CommunityForum/></div>;
      case 'Settings':
        return <div><ProfileCard/></div>
      default:
        return <div> <CodeCraftDashboard/></div>;
    }
  };

  const getMenuItemClass = (page) => {
    return currentSetting === page 
      ? 'bg-indigo-900   py-3 text-white cursor-pointer flex items-center justify-left gap-5 pl-4 mr-2' 
      : 'hover:bg-indigo-600  pl-4 py-3 rounded-xl hover:text-white cursor-pointer flex items-center justify-left gap-5 mr-2 ';
  };

  return (
    <div className='h-screen overflow-hidden'>
      <div className='h-screen w-screen flex overflow-hidden'>
        {/* sidebar */}
        <div className={`h-screen  ${width<896?'hidden': 'flex flex-col'} w-60 bg-indigo-800  flex-shrink-0`} style={{ height: "100%" }}>

        <div className="p-4 flex items-center justify-center lg:justify-start cursor-pointer"  onClick={()=> navigate('/')}>
          <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center">
            <Code size={20} className="text-indigo-800" />
          </div>
          <span className="ml-2 text-xl font-bold hidden  text-white lg:block ">CodeCraft</span>
        </div>
            <button className='bg-indigo-600  pl-2 mt-4 py-3 rounded-xl text-white cursor-pointer flex items-center gap-2 ml-4 mr-4 justify-center font-semibold'><PlusCircle size={17}/> New Project</button>

          <ul className="text-lg flex flex-col gap-y-3  mt-10 pl-2 text-white" >
            <li
              className={getMenuItemClass('Code Editor')}
              onClick={() => dispatch(setcurrentSetting('Code Editor'))}
            >
                <Terminal size={17} />
              Code Editor 
            </li>
            <li
              className={getMenuItemClass('Dashboard')}
              onClick={() => dispatch(setcurrentSetting('Dashboard'))}
            >
                <Layout size={17} />
              Dashboard
            </li>
            <li
              className={getMenuItemClass('Projects')}
              onClick={() => dispatch(setcurrentSetting('Projects'))}
            >
                <Folder size={17} />
              Projects
            </li>
            <li
              className={getMenuItemClass('Templates')}
              onClick={() => dispatch(setcurrentSetting('Templates'))}
            >
                <Bookmark size={17} />
              Templates
            </li>
            <li
              className={getMenuItemClass('Documentation')}
              onClick={() => dispatch(setcurrentSetting('Documentation'))}
            >
                <BookOpen size={17} />
              Documentation
            </li>
            <li
              className={getMenuItemClass('Community')}
              onClick={() => dispatch(setcurrentSetting('Community'))}
            >
                <MessageSquare size={17} />
              Community
            </li>
            <li
              className={getMenuItemClass('Settings')}
              onClick={() => dispatch(setcurrentSetting('Settings'))}
            >
                <Settings size={17} />
              Settings
            </li>
          </ul>
        </div>
        <div className='flex-grow overflow-y-auto' style={{ height: "100%" }}>
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default HomePage;