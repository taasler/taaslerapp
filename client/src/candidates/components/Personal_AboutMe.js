// src/candidates/components/Personal_AboutMe.js

import React from 'react';
import '../styles/Personal_AboutMe.css';

// Components (assumed to be already created and imported as necessary)
const AboutMe = () => (
  <div className="about-me-container">
    <h2>About Me</h2>
    <textarea placeholder="Brief description about yourself..."></textarea>
    <div className="word-count">160 words remaining</div>
  </div>
);

const ContactInfo = () => (
  <div className="contact-info">
      <div className="sub-column">
      <input type="text" placeholder="First Name" />
      <input type="text" placeholder="Email" />
      <input type="text" placeholder="Phone #" />
      <input type="text" placeholder="Work Hours" />
      <input type="text" placeholder="Work Flexibility" />
    </div>
    <div className="sub-column">
      <input type="text" placeholder="Last Name" />
      <input type="text" placeholder="Date of Birth" />
      <input type="text" placeholder="Location" />
      <input type="text" placeholder="Industry" />
      <input type="text" placeholder="Expected Rate" />
    </div>
  </div>
);

const Personal_Education = () => (
  <div className="education">
    <h3>Education</h3>
    <p>University 2000-2004</p>
  </div>
);

const Personal_Certificates = () => (
  <div className="certificates">
    <h3>Certificates</h3>
    <ul>
      <li>PMP Project Management 2010</li>
      <li>Scrum Master 2012</li>
      <li>Change Management 2013</li>
    </ul>
    <button>Upload Qualifications</button>
  </div>
);

const Personal_RolesOfInterest = () => (
  <div className="roles-of-interest">
    <h3>Roles of Interest</h3>
    <textarea placeholder="Start Typing..."></textarea>
  </div>
);

const Personal_Achievements = () => (
  <div className="achievements">
    <h3>Work Achievements</h3>
    <textarea placeholder="Describe your achievements..."></textarea>
  </div>
);

const Personal_Interests = () => (
  <div className="interests">
    <h3>Personal Interests</h3>
    <textarea placeholder="Describe your personal interests..."></textarea>
  </div>
);

const PersonalAboutMe = () => {
  return (
    <div className="personal-about-me">
      {/* About Me Section */}
      <AboutMe />

      {/* Container for Contact Info and Other Details */}
      <div className="details-container">
        <div className="left-column">
          <ContactInfo />
          <Personal_RolesOfInterest />
          <Personal_Achievements />
        </div>
        <div className="right-column">
          <Personal_Education />
          <Personal_Certificates />
          <Personal_Interests />
        </div>
      </div>
    </div>
  );
};

export default PersonalAboutMe;