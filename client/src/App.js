// client/src/App.js
import React, { useEffect, useState } from 'react';
/* import { getJobs, createJob } from './api'; */

/* import React from 'react'; */
import './styles/App.css';
import Header from './core/components/Header';
import ProfileSummary from './candidates/components/Summary_ProfileSummary';
import JobSearch from './candidates/components/JobSearch';
import JobList from './candidates/components/Summary_JobList';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <ProfileSummary />
        <JobSearch />
        <JobList />
      </main>
    </div>
  );
}

export default App;




/* 
// code from first app with example of MongoDB
function App() {
  const [jobs, setJobs] = useState([]);
  const [job, setJob] = useState({ title: '', description: '', company: '', location: '' });

  useEffect(() => {
    const fetchData = async () => {
      const result = await getJobs();
      setJobs(result);
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newJob = await createJob(job);
    setJobs([...jobs, newJob]);
  };

  return (
    <div className="App">
      <h1>Jobs</h1>
      <ul>
        {jobs.map((job) => (
          <li key={job._id}>
            {job.title} - {job.company} ({job.location})
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="Job Title" value={job.title} onChange={handleChange} />
        <input name="description" placeholder="Description" value={job.description} onChange={handleChange} />
        <input name="company" placeholder="Company" value={job.company} onChange={handleChange} />
        <input name="location" placeholder="Location" value={job.location} onChange={handleChange} />
        <button type="submit">Add Job</button>
      </form>
    </div>
  );
}
 */

