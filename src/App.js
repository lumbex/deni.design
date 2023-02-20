import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/projects/ProjectPage';
import MyHealthProjectPage from './pages/projects/MyHealthProjectPage';
import LugahProjectPage from './pages/projects/LugahProjectPage';
import GroceristProjectPage from './pages/projects/GroceristProjectPage';
import RPlannerProjectPage from './pages/projects/RPlannerProjectPage';
import XcelProjectPage from './pages/projects/XcelProjectPage';
import SpeakingPage from './pages/SpeakingPage';
import NotFoundPage from './pages/NotFoundPage.js';

import AppNavbar from "./components/app-components/Navbar";
import AppFooter from "./components/app-components/Footer";


function App() {
  return (
    <>
        <div className='app'>
            <AppNavbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/projects/project-page" element={<ProjectPage />} />
                <Route path="/projects/my-health" element={<MyHealthProjectPage />} />
                <Route path="/projects/lugah" element={<LugahProjectPage />} />
                <Route path="/projects/grocerist" element={<GroceristProjectPage />} />
                <Route path="/projects/r-planner" element={<RPlannerProjectPage />} />
                <Route path="/projects/xcel" element={<XcelProjectPage />} />
                <Route path="/speaking" element={<SpeakingPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
            <AppFooter />
        </div>

    </>    
  );
}

export default App;
