import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchJobs } from '../services/api';

const JobDetail = () => {
  const { jobId } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadJobDetail = async () => {
      try {
        console.log(`Fetching details for job ID ${jobId}`); // Debug log
        
        // Fetch jobs by page or from a cached list
        const allJobs = await fetchJobs(); // Adjust this function to fetch all jobs or a single job based on API
        
        // Find the job with the matching ID
        const selectedJob = allJobs.find(job => job.id === parseInt(jobId, 10));
        
        console.log('Job detail:', selectedJob); // Debug log
        if (selectedJob) {
          setJob(selectedJob);
        } else {
          setError('Job not found');
        }
      } catch (err) {
        console.error('Error fetching job details:', err);
        setError('Failed to load job details');
      }
      setLoading(false);
    };

    loadJobDetail();
  }, [jobId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!job) return <p>No job details available.</p>;

  return (
    <div>
      <h2>{job.title}</h2>
      <p><strong>Location:</strong> {job.primary_details.job_location}</p>
      <p><strong>Salary:</strong> {job.primary_details.salary}</p>
      <p><strong>Phone:</strong> {job.primary_details.phone}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default JobDetail;
