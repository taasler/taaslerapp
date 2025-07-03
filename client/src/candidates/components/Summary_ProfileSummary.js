// src/candidates/components/Summary_ProfileSummary.js

// Summary component at top of Summary screen
// EPIC TAAS-3

import React from 'react';
import '../styles/Summary_ProfileSummary.css';
import profile from '../../assets/profile.png'; // Add your logo image in public/assets

const ProfileSummary = () => {
  return (
    <section className="profile-summary">
      <div className="profile-left">
        {/* TAAS-28 */}
        <img src="../assets/profile.png" alt="Profile" className="profile-image" />
        <div className="star-rating">
          <span>★★★★★</span>
        </div>
        <a href="#" className="read-reviews">Read Reviews</a>
      </div>
       {/* TAAS-26 & TAAS-27 */}
      <div className="profile-middle-left">
        <div className="status-info">
          <label>
            Availability Status:
            <select>
              <option>Available</option>
              <option>Contract Expiring</option>
              <option>Not Available</option>
            </select>
          </label>
          <label>
            Contact Status:
            <select>
              <option>Available</option>
              <option>Not Available</option>
            </select>
          </label>
        </div>
      </div>
      <div className="profile-middle-right">
        <div className="additional-info">
          <span>Profile Views This Week: 20</span>
          <span>Messages: (0)</span>
        </div>
      </div>
      <div className="profile-right">
        <div className="profile-completion">
          <div className="completion-status">
            Profile Completion Status: 90%
          </div>
          <a href="#" className="view-public-profile">View Public Profile</a>
        </div>
      </div>
       {/* TAAS-283 */}
      <div className="profile-footer">
        <span>Current Active Contract: <strong>Test Manager</strong></span>
        <span>Expires: <strong>31/10/2020</strong></span>
        <button className="submit-timesheet">Submit Invoice</button>
      </div>
    </section>
  );
};


export default ProfileSummary;
