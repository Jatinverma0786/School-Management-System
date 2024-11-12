import React, { useState, useEffect } from 'react';
import { fetchSchools } from '../services/api';

function Dashboard() {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    const getSchools = async () => {
      const data = await fetchSchools();
      setSchools(data);
    };
    getSchools();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <div>
        <h3>Schools List</h3>
        <ul>
          {schools.map(school => (
            <li key={school._id}>{school.name} - {school.address}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
