import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <nav style={{ width: '200px', background: '#f4f4f4', padding: '20px' }}>
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/school">School Panel</Link></li>
        <li><Link to="/teachers">Teacher Panel</Link></li>
        <li><Link to="/parents">Parent Panel</Link></li>
        <li><Link to="/fees">Fee Management</Link></li>
        <li><Link to="/teacher-management">Teacher Management</Link></li>
        <li><Link to="/announcement-management">Announcement Management</Link></li>
      </ul>
    </nav>
  );
}

export default Sidebar;
