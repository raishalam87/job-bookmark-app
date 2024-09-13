import React, { useState, useEffect } from 'react';
import { getBookmarkedJobs } from '../services/localStorageService';
import JobCard from '../components/JobCard';

const BookmarksPage = () => {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    const loadBookmarks = async () => {
      const bookmarkedJobs = await getBookmarkedJobs();
      setBookmarks(bookmarkedJobs);
    };

    loadBookmarks();
  }, []);

  return (
    <div>
      {bookmarks.map(job => (
        <JobCard key={job.id} job={job} onBookmark={() => {}} />
      ))}
    </div>
  );
};

export default BookmarksPage;
