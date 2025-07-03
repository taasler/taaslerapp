// talent-app-backend/api/index.js
//add an index.js inside the api directory to act as an aggregator for all the routes:

const express = require('express');
const experienceRoutes = require('./routes/experience');

const router = express.Router();

router.use('/experiences', experienceRoutes);

module.exports = router;
