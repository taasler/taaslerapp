// server/routes/jobs.js
const express = require('express');
const router = express.Router();
const Job = require('../models/Job');

// Get all jobs
router.get('/', async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// Create a new job
router.post('/', async (req, res) => {
  const { title, description, company, location } = req.body;
  try {
    const newJob = new Job({
      title,
      description,
      company,
      location,
    });

    const job = await newJob.save();
    res.json(job);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

module.exports = router;
