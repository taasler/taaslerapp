// src/components/candidates/Summary_JobList.js

// TAAS-314 & TAAS-315

import React from 'react';
import '../styles/Summary_JobList.css';
import JobCard from '../components/JobCard';


const JobList = () => {
  const matchedJobs = [
    { id: 1, title: 'Test Manager', location: 'Dublin', type: 'Fully Remote' },
    { id: 2, title: 'Head of QA', location: 'Dublin', type: 'Partly Remote' },
    { id: 3, title: 'Test Manager', location: 'Dublin', type: 'Partly Remote' }
  ];

  const wishlistJobs = [
    { id: 1, title: 'Test Manager', location: 'Dublin', type: 'Partly Remote' },
    { id: 2, title: 'Head of QA', location: 'Dublin', type: 'Partly Remote' },
    { id: 3, title: 'Test Manager', location: 'Dublin', type: 'Partly Remote' }
  ];

  // TAAS-314 & TAAS-315
  return (
    <section className="job-list">
      <div className="job-list-column">
        <h3>New Matched Jobs</h3>
        {matchedJobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
        <button className="view-more">View More</button>
      </div>
      <div className="job-list-column">
        <h3>My Wishlist Jobs</h3>
        {wishlistJobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
        <button className="view-more">View More</button>
      </div>
    </section>
  );
}

export default JobList;
