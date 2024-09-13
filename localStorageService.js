import localforage from 'localforage';

const DB_KEY = 'bookmarkedJobs';

export const getBookmarkedJobs = async () => {
  return await localforage.getItem(DB_KEY) || [];
};

export const addBookmark = async (job) => {
  const bookmarks = await getBookmarkedJobs();
  bookmarks.push(job);
  await localforage.setItem(DB_KEY, bookmarks);
};

export const removeBookmark = async (jobId) => {
  let bookmarks = await getBookmarkedJobs();
  bookmarks = bookmarks.filter(job => job.id !== jobId);
  await localforage.setItem(DB_KEY, bookmarks);
};
