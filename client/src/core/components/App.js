// src/core/components/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import '../styles/App.css';
import Header from './Header';
import {
  Summary_ProfileSummary,
  Summary_JobList,
  JobCard,
  JobSearch,
  //Personal_ProfileImage,
  Personal_AboutMe,
  //Personal_ContactInfo,
  ContactInfo,
  Personal_Education,
  Personal_Certificates,
  Personal_RolesOfInterest,
  Personal_Achievements,
  Personal_Interests
} from '../../candidates/components'; // Bulk import components from index.js
import SummaryPage from '../../pages/SummaryPage';
import PersonalDetailsPage from '../../pages/PersonalDetailsPage';
import Experience from '../../pages/ProfessionalDetailsPage';
import JobScreen from '../../pages/JobScreen';



const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            {/* Redirect from root to summary */}
            <Route path="/" element={<Navigate to="/summary" />} />
            {/* Define the route for SummaryPage */}
            <Route path="/summary" element={<SummaryPage />} />
            {/* Define the route for PersonalDetailsPage */}
            <Route path="/personal-details" element={<PersonalDetailsPage />} />
            {/* Define the route for ProfessionalDetailsPage */}
            <Route path="/professional-experience" element={<Experience />} />
            {/* Define the route for JobsScreen */}
            <Route path="/Jobs" element={<JobScreen />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}; 

export default App;
