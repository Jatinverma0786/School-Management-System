import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Fetch schools from the backend
export const fetchSchools = async () => {
  try {
    const response = await axios.get(`${API_URL}/school`);
    return response.data;
  } catch (error) {
    console.error("Error fetching schools:", error);
    return [];
  }
};

// Add a new school
export const addSchool = async (schoolData) => {
  try {
    const response = await axios.post(`${API_URL}/school`, schoolData);
    return response.data;
  } catch (error) {
    console.error("Error adding school:", error);
  }
};
