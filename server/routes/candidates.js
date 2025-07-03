// server/routes/candidates.js
const express = require('express');
const router = express.Router();
const Candidate = require('../models/Candidate');

// Get all candidates
router.get('/', async (req, res) => {
  try {
    const candidates = await Candidate.find();
    res.json(candidates);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// Create a new candidate
router.post('/', async (req, res) => {
  const { name, email, resume, skills } = req.body;
  try {
    const newCandidate = new Candidate({
      name,
      email,
      resume,
      skills,
    });

    const candidate = await newCandidate.save();
    res.json(candidate);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

module.exports = router;
