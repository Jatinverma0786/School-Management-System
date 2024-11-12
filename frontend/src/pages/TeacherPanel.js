import React, { useState } from 'react';

function TeacherPanel() {
  const [teacherData, setTeacherData] = useState({ name: '', subject: '', schoolId: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTeacherData({ ...teacherData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Call API to add teacher
    console.log(teacherData);
  };

  return (
    <div>
      <h2>Teacher Management</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={teacherData.name} onChange={handleChange} placeholder="Teacher Name" />
        <input type="text" name="subject" value={teacherData.subject} onChange={handleChange} placeholder="Subject" />
        <input type="text" name="schoolId" value={teacherData.schoolId} onChange={handleChange} placeholder="School ID" />
        <button type="submit">Add Teacher</button>
      </form>
    </div>
  );
}

export default TeacherPanel;
