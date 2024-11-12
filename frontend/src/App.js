import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import SchoolPanel from './pages/SchoolPanel';
import TeacherPanel from './pages/TeacherPanel';
import ParentPanel from './pages/ParentPanel';
import FeeManagement from './pages/FeeManagement';
import TeacherManagement from './pages/TeacherManagement';
import AnnouncementManagement from './pages/AnnouncementManagement';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <div style={{ display: 'flex' }}>
          <Sidebar />
          <div style={{ flex: 1, padding: '20px' }}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/school" element={<SchoolPanel />} />
              <Route path="/teachers" element={<TeacherPanel />} />
              <Route path="/parents" element={<ParentPanel />} />
              <Route path="/fees" element={<FeeManagement />} />
              <Route path="/teacher-management" element={<TeacherManagement />} />
              <Route path="/announcement-management" element={<AnnouncementManagement />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
