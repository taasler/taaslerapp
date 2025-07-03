// client/src/api.js
const API_URL = 'http://localhost:5000';

/* export const getWelcomeMessage = async () => {
  const response = await fetch(`${API_URL}/`);
  const data = await response.text();
  return data;
}; */


export const getJobs = async () => {
  const response = await fetch(`${API_URL}/api/jobs`);
  return await response.json();
};

export const createJob = async (job) => {
  const response = await fetch(`${API_URL}/api/jobs`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(job),
  });
  return await response.json();
};

export const getCandidates = async () => {
  const response = await fetch(`${API_URL}/api/candidates`);
  return await response.json();
};

export const createCandidate = async (candidate) => {
  const response = await fetch(`${API_URL}/api/candidates`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(candidate),
  });
  return await response.json();
};
