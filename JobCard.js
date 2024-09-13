import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './JobCard.css'; // Import the CSS file

const JobCard = ({ job, onBookmark }) => {
  const navigate = useNavigate();

  // Extract job details
  const title = job.title || 'No Title';
  const location = job.primary_details?.Place || 'No Location';
  const salary = job.primary_details?.Salary || 'No Salary';
  const phone = job.whatsapp_no || 'No Phone';

  return (
    <Card className="job-card">
      <CardContent>
        <Typography variant="h6" className="job-title">{title}</Typography>
        <Typography className="job-details job-location">{location}</Typography>
        <Typography className="job-details job-salary">{salary}</Typography>
        <Typography className="job-details job-phone">{phone}</Typography>
        <Button 
          className="job-card-button" 
          onClick={() => navigate(`/job/${job.id}`)}
        >
          View Details
        </Button>
        <Button 
          className="job-card-button job-card-bookmark" 
          onClick={() => onBookmark(job)}
        >
          Bookmark
        </Button>
      </CardContent>
    </Card>
  );
};

export default JobCard;
