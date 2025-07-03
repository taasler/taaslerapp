// src/pages/SummaryPage.js

import React from 'react';
import {
    Summary_ProfileSummary,
    Summary_JobList,
    JobCard,
    JobSearch
  } from '../candidates/components'; // Bulk import components from index.js


const SummaryPage = () => {
  return (
    <div>
      {/* <h1>Summary</h1> */}
      <Summary_ProfileSummary />
      <JobSearch />
      <Summary_JobList />
    </div>
  );
};

export default SummaryPage;
