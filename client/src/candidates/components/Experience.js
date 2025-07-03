// src/candidates/components/Experience.js
// This component will list the professional experiences, allowing users to edit or delete entries.

import React, { useState } from 'react';
import ExperienceForm from './ExperienceForm';
import ExperienceModal from './ExperienceModal';
import '../styles/Experience.css';

const Experience = () => {
    const [experiences, setExperiences] = useState([]);
    const [currentExperience, setCurrentExperience] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const addExperience = (experience) => {
        setExperiences([...experiences, experience]);
    };

    const editExperience = (index, updatedExperience) => {
        const updatedExperiences = experiences.map((exp, i) =>
            i === index ? updatedExperience : exp
        );
        setExperiences(updatedExperiences);
    };

    const deleteExperience = (index) => {
        setExperiences(experiences.filter((_, i) => i !== index));
    };

    const handleAddExperienceClick = () => {
        setCurrentExperience(null);
        setIsModalOpen(true);
    };

    const handleEditExperienceClick = (index) => {
        setCurrentExperience({ ...experiences[index], index });
        setIsModalOpen(true);
    };

    return (
        <div className="experience-container">
            <h2>Professional Experience</h2>
            {experiences.map((experience, index) => (
                <div key={index} className="experience-item">
                    <div className="experience-header">
                        <div>
                            <strong>{experience.role}</strong> at {experience.company} <br />
                            {experience.from} - {experience.to || 'Present'}
                        </div>
                        <div className="experience-actions">
                            <button onClick={() => handleEditExperienceClick(index)}>Edit</button>
                            <button onClick={() => deleteExperience(index)}>Delete</button>
                        </div>
                    </div>
                    <div className="experience-details">
                        <p>{experience.description}</p>
                        <p><strong>Achievements:</strong> {experience.achievements}</p>
                    </div>
                </div>
            ))}
            <button className="add-experience-button" onClick={handleAddExperienceClick}>
                Add More Experience
            </button>
            {isModalOpen && (
                <ExperienceModal
                    onClose={() => setIsModalOpen(false)}
                    onSave={currentExperience ? editExperience : addExperience}
                    experience={currentExperience}
                />
            )}
        </div>
    );
};

export default Experience;
