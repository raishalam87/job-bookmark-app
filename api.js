import axios from 'axios';

const API_URL = 'https://testapi.getlokalapp.com/common/jobs?page=';

export const fetchJobs = async (page) => {
  try {
    const response = await axios.get(`${API_URL}${page}`);
    console.log('API Response:', response.data); // Log the entire response data

    // Inspect the structure of the response
    // Example structure: { "data": { "jobs": [...] } }
    // Adjust based on the actual structure
    return response.data.jobs || [];
  } catch (error) {
    console.error('Error fetching jobs:', error);
    return [];
  }
};
