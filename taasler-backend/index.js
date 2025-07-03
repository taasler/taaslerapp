// talent-app-backend/index.js
// set up express server
// run the server in CMD - node index.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const apiRoutes = require('./api');  // Import all API routes from the api directory

const app = express();
const PORT = process.env.PORT || 5000;

const mongoURI = 'your-mongodb-connection-string-here';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

app.use(cors());
app.use(bodyParser.json());

app.use('/api', apiRoutes);  // Mount all API routes under /api

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

