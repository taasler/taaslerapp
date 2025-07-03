import React, { useState } from 'react';
import '../styles/JobScreen.css';
import SearchPage from '../candidates/components/SearchPage';
import MyJobsPage from '../candidates/components/MatchedJobs';

const JobScreen = () => {
  const [activeTab, setActiveTab] = useState('search');

  return (
    <div className="job-screen-container">
      <div className="tabs">
        <button className={`tab ${activeTab === 'search' ? 'active' : ''}`} onClick={() => setActiveTab('search')}>
          Search
        </button>
        <button className={`tab ${activeTab === 'jobs' ? 'active' : ''}`} onClick={() => setActiveTab('jobs')}>
          My Jobs
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'search' ? <SearchPage /> : <MyJobsPage />}
      </div>
    </div>
  );
};

export default JobScreen;
