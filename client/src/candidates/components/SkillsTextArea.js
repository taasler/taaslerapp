// src/candidates/components/Experience.js
//This component provides the text area with text-ahead functionality.

import React, { useState } from 'react';
import '../styles/SkillsTextArea.css';

const SkillsTextArea = ({ label, name, value, onChange }) => {
    const [suggestions, setSuggestions] = useState([]);
    const skills = ['JavaScript', 'React', 'CSS', 'HTML', 'Node.js', 'Leadership', 'Communication']; // Replace with your skill data source

    const handleInputChange = (e) => {
        const input = e.target.value;
        onChange(e);
        if (input.length > 0) {
            const filteredSuggestions = skills.filter((skill) =>
                skill.toLowerCase().startsWith(input.toLowerCase())
            );
            setSuggestions(filteredSuggestions);
        } else {
            setSuggestions([]);
        }
    };

    const handleSuggestionClick = (suggestion) => {
        onChange({
            target: {
                name,
                value: suggestion,
            },
        });
        setSuggestions([]);
    };

    return (
        <div className="skills-textarea">
            <label>{label}</label>
            <textarea
                name={name}
                value={value}
                onChange={handleInputChange}
                autoComplete="off"
            />
            {suggestions.length > 0 && (
                <ul className="suggestions-list">
                    {suggestions.map((suggestion, index) => (
                        <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
                            {suggestion}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SkillsTextArea;
