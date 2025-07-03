// src/candidates/components/Personal_ProfileImage.js

import React from 'react';
import '../styles/Personal_ProfileImage.css';


const ProfileImage = () => {
  return (
    <div className="profile-image-container">
      <img src="../assets/profile.png" alt="Profile" className="profile-image" />
    </div>
  );
}


export default ProfileImage;
