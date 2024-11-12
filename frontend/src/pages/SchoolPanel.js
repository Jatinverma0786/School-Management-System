import React, { useState } from 'react';

function SchoolPanel() {
  const [schoolData, setSchoolData] = useState({ name: '', address: '', establishedYear: '', contact: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSchoolData({ ...schoolData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Call API to add school
    console.log(schoolData);
  };

  return (
    <div>
      <h2>School Management</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={schoolData.name} onChange={handleChange} placeholder="School Name" />
        <input type="text" name="address" value={schoolData.address} onChange={handleChange} placeholder="Address" />
        <input type="number" name="establishedYear" value={schoolData.establishedYear} onChange={handleChange} placeholder="Established Year" />
        <input type="text" name="contact" value={schoolData.contact} onChange={handleChange} placeholder="Contact" />
        <button type="submit">Add School</button>
      </form>
    </div>
  );
}

export default SchoolPanel;
