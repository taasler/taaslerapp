const express = require('express');
const app = express();
const port = 3000;

// Mock skills data
const skills = [
  { id: 1, name: 'React' },
  { id: 2, name: 'Node.js' },
  { id: 3, name: 'JavaScript' },
  { id: 4, name: 'Python' },
  { id: 5, name: 'Java' },
  { id: 6, name: 'C++' },
  { id: 7, name: 'Ruby' },
  { id: 8, name: 'PHP' },
  { id: 9, name: 'Swift' },
  { id: 10, name: 'Kotlin' },
];

app.get('/api/skills', (req, res) => {
  const { query } = req.query;
  
  // Filter skills based on the query
  const filteredSkills = skills.filter(skill =>
    skill.name.toLowerCase().includes(query.toLowerCase())
  );
  
  res.json(filteredSkills);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});