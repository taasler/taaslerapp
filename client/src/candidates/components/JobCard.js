// src/components/JobCard.js

import React from 'react';
import '../styles/JobCard.css';

const JobCard = ({ job }) => {
  return (
    <div className="job-card">
      <div className="job-card-header">
        <img className="job-image" src="../../assets/logo.png" alt="Company Logo" />
        <div>
          <h4>{job.title}</h4>
          <p>{job.location} - {job.type}</p>
        </div>
      </div>
      <div className="job-card-footer">
        <button className="apply-button">Apply</button>
        <button className="wishlist-button">Wishlist</button>
      </div>
    </div>
  );
}

export default JobCard;
