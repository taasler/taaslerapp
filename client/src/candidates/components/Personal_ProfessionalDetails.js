// src/components/candidates/Personal_ProfessionalDetails.js

import React from 'react';
import '../styles/Personal_ProfessionalDetails.css';


const HardSkills = () => (
    <div className="hard-skills">
        <h2>Hard Skills</h2>
        <textarea placeholder="Start typing to add hard skills..."></textarea>
    </div>
);

const SoftSkills = () => (
    <div className="soft-skills">
        <h2>Soft Skills</h2>
        <textarea placeholder="Start typing to add soft skills..."></textarea>
    </div>
);

const DetailedExp = () => (
    <div className="detailed-experience">
        <h2>Detailed Experience</h2>
        <div className="experience-item">
            <input type="text" placeholder="Role Title" />
            <input type="text" placeholder="Company" />
            <textarea placeholder="Description"></textarea>
        </div>
        <button className="add-experience">Add More Experience</button>
    </div>
);


const ProfExperience = () => {
    return (
        <div className="skills-container">
            {/* Container for Contact Info and Other Details */}
            <div className="left-column">
                <HardSkills />
            </div>
            <div className="right-column">
                <SoftSkills />
            </div>
        </div>
    );
};


export default ProfExperience; 
