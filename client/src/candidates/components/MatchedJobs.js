import React from 'react';
import '../styles/MatchedJobs.css';

const matchedJobs = [
  { id: 1, title: 'Test Manager', company: 'AIB', location: 'Dublin', flexibility: 'Fully Remote' },
  { id: 2, title: 'Head of QA', company: 'Currency Fair', location: 'Dublin', flexibility: 'Partly Remote' },
  { id: 3, title: 'UAT Test Manager', company: 'Currency Fair', location: 'Dublin', flexibility: 'Partly Remote' },
];

const MatchedJobs = () => {
  return (
    <div className="matched-jobs">
      <h3>Review Matched Jobs</h3>
      {matchedJobs.map((job) => (
        <div className="job-card" key={job.id}>
          <h4>{job.title}</h4>
          <p>{job.company} | {job.location}</p>
          <p>{job.flexibility}</p>
        </div>
      ))}
    </div>
  );
};

export default MatchedJobs;
