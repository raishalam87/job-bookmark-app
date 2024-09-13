import React, { useState, useEffect } from 'react';
import JobCard from './JobCard';
import { addBookmark } from '../services/localStorageService';
import './JobList.css'; // Import the updated CSS file

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadJobs = async () => {
      setLoading(true);
      setError(null);
      try {
        console.log(`Fetching jobs for page ${page}`);
        const response = await fetch(`https://testapi.getlokalapp.com/common/jobs?page=${page}`);
        const data = await response.json();
        console.log('API Response:', data);

        if (data && data.results) {
          const newJobs = data.results;
          console.log('Received jobs:', newJobs);
          setJobs(prevJobs => [...prevJobs, ...newJobs]);
        } else {
          console.warn('Unexpected response structure:', data);
        }
      } catch (err) {
        console.error('Error loading jobs:', err);
        setError('Failed to load jobs');
      }
      setLoading(false);
    };

    loadJobs();
  }, [page]);

  const handleBookmark = async (job) => {
    await addBookmark(job);
  };

  return (
    <div>
      {error && <p>{error}</p>}
      <div className="job-list-container">
        {jobs.length > 0 ? (
          jobs.map(job => (
            <JobCard key={job.id} job={job} onBookmark={handleBookmark} />
          ))
        ) : (
          <p>No jobs available.</p>
        )}
      </div>
      {loading && <p>Loading...</p>}
      <button 
        className="load-more-button" 
        onClick={() => setPage(prevPage => prevPage + 1)}
        disabled={loading} // Optional: Disable button while loading
      >
        Load More
      </button>
    </div>
  );
};

export default JobList;
