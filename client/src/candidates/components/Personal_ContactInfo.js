// src/candidates/components/Personal_ContactInfo.js

import React from 'react';
import '../styles/Personal_ContactInfo.css';

const ContactInfo = () => {
  return (
    <div className="contact-info">
      <div className="form-group">
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
      </div>
      <div className="form-group">
        <input type="email" placeholder="Email" />
        <input type="date" placeholder="Date of Birth" />
      </div>
      <div className="form-group">
        <input type="tel" placeholder="Phone #" />
        <input type="text" placeholder="Location" />
      </div>
      <div className="form-group">
        <input type="text" placeholder="Work Hours" />
        <input type="text" placeholder="Industry" />
      </div>
      <div className="form-group">
        <input type="text" placeholder="Work Flexibility" />
        <input type="text" placeholder="Expected Rate" />
      </div>
    </div>
  );
}

export default ContactInfo;
