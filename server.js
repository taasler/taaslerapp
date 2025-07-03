// server.js
const express = require('express');
const connectDB = require('./server/config/db');

const app = express();
const PORT = process.env.PORT || 5000;


// Connect to database
connectDB();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to TAASLER API');
});


app.use('/api/jobs', require('./server/routes/jobs'));
app.use('/api/candidates', require('./server/routes/candidates'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
