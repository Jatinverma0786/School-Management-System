import React, { useState } from 'react';

function ParentPanel() {
  const [parentData, setParentData] = useState({ name: '', contact: '', studentId: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setParentData({ ...parentData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Call API to add parent
    console.log(parentData);
  };

  return (
    <div>
      <h2>Parent Management</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={parentData.name} onChange={handleChange} placeholder="Parent Name" />
        <input type="text" name="contact" value={parentData.contact} onChange={handleChange} placeholder="Contact" />
        <input type="text" name="studentId" value={parentData.studentId} onChange={handleChange} placeholder="Student ID" />
        <button type="submit">Add Parent</button>
      </form>
    </div>
  );
}

export default ParentPanel;
