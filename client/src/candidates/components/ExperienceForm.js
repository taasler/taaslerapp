// src/candidates/components/ExperienceForm.js
// This component will handle the form input for each experience.

import React, { useState } from 'react';
import SkillsTextArea from './SkillsTextArea';
import '../styles/ExperienceForm.css';

const ExperienceForm = ({ onSave, onClose, experience }) => {
    const [formData, setFormData] = useState({
        role: experience?.role || '',
        company: experience?.company || '',
        from: experience?.from || '',
        to: experience?.to || '',
        current: experience?.current || false,
        description: experience?.description || '',
        achievements: experience?.achievements || '',
        hardSkills: experience?.hardSkills || '',
        softSkills: experience?.softSkills || '',
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
        onClose();
    };

    return (
        <form className="experience-form" onSubmit={handleSubmit}>
            <label>
                Role Title
                <input
                    type="text"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    required
                />
            </label>
            <label>
                Company Name
                <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                />
            </label>
            <label>
                From
                <input
                    type="date"
                    name="from"
                    value={formData.from}
                    onChange={handleChange}
                    required
                />
            </label>
            <label>
                To
                <input
                    type="date"
                    name="to"
                    value={formData.to}
                    onChange={handleChange}
                    disabled={formData.current}
                />
            </label>
            <label>
                <input
                    type="checkbox"
                    name="current"
                    checked={formData.current}
                    onChange={handleChange}
                />
                Current Role
            </label>
            <label>
                Description
                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                />
            </label>
            <label>
                Achievements
                <textarea
                    name="achievements"
                    value={formData.achievements}
                    onChange={handleChange}
                    required
                />
            </label>
            <SkillsTextArea
                label="Hard Skills"
                name="hardSkills"
                value={formData.hardSkills}
                onChange={handleChange}
            />
            <SkillsTextArea
                label="Soft Skills"
                name="softSkills"
                value={formData.softSkills}
                onChange={handleChange}
            />
            <div className="form-actions">
                <button type="submit">Save</button>
                <button type="button" onClick={onClose}>Cancel</button>
            </div>
        </form>
    );
};

export default ExperienceForm;
