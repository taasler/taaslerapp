// src/candidates/components/ExperienceModal.js
//This component will display the modal for adding or editing an experience.

import React from 'react';
import ExperienceForm from './ExperienceForm';
import '../styles/ExperienceModal.css';

const ExperienceModal = ({ onClose, onSave, experience }) => {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h3>{experience ? 'Edit Experience' : 'Add Experience'}</h3>
                <ExperienceForm onSave={onSave} onClose={onClose} experience={experience} />
            </div>
        </div>
    );
};

export default ExperienceModal;
