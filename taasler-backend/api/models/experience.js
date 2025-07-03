// models/experience.js
//Define the Experience Schema in Mongoose

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExperienceSchema = new Schema({
    role: { type: String, required: true },
    company: { type: String, required: true },
    from: { type: Date, required: true },
    to: { type: Date },
    current: { type: Boolean, default: false },
    description: { type: String, required: true },
    achievements: { type: String, required: true },
    hardSkills: { type: String },
    softSkills: { type: String }
});

module.exports = mongoose.model('Experience', ExperienceSchema);
