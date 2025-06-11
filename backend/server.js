const express = require('express');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

// Mock user database (replace with real database like MongoDB)
const users = [
  { email: 'test@example.com', password: 'password123' },
];

// Login endpoint
app.post('/api/login/', (req, res) => {
  const { email, password } = req.body;
  const user = users.find((u) => u.email === email && u.password === password);
  if (user) {
    res.json({ token: 'mock-jwt-token' });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

// Register endpoint
app.post('/api/register/', (req, res) => {
  const { email, password } = req.body;
  const userExists = users.find((u) => u.email === email);
  if (userExists) {
    res.status(400).json({ error: 'User already exists' });
  } else {
    users.push({ email, password });
    res.status(201).json({ message: 'User registered successfully' });
  }
});

// Start server
app.listen(8000, () => console.log('Server running on port 8000'));