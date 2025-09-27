const express = require('express');
const users1 = require('./MOCK_DATA.json');

const port = 4000;
const app = express();
const path = require('path');


// Middleware to parse JSON bodies
app.use(express.json());

// Root route
app.get('/', (req, res) => {
    res.send("Hello From Express");
});

// Corrected: The specific route /users/aboutus must be placed before the generic /users/:id route
app.get('/aboutus', (req, res) => {
    res.sendFile(path.join(__dirname, './aboutus.html'));
});

// Get all users
app.get('/users', (req, res) => {
    res.json(users1);
});



// Get user by ID (number)
app.get('/users/:id', (req, res) => {
    const id = Number(req.params.id);
    const user = users1.find(user => user.id === id);
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
});

// Optionally get user by ID and email
app.get('/users/:id/:email', (req, res) => {
    const id = Number(req.params.id);
    const email = req.params.email;
    const user = users1.find(user => user.id === id && user.email === email);
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
});

// Delete user by ID
app.delete('/users/:id', (req, res) => {
    const id = Number(req.params.id);
    const userIndex = users1.findIndex(user => user.id === id);
    if (userIndex === -1) {
        return res.status(404).json({ message: 'User not found' });
    }
    const deletedUser = users1.splice(userIndex, 1);
    res.json(deletedUser[0]);
});

// Add a new user
app.post('/users', (req, res) => {
    const { first_name, last_name, email } = req.body;
    if (!first_name || !last_name || !email) {
        return res.status(400).json({ message: 'Missing required user fields' });
    }
    // Assign new ID as max existing id + 1, or 1 if empty
    const newId = users1.length > 0 ? Math.max(...users1.map(u => u.id)) + 1 : 1;
    const newUser = { id: newId, first_name, last_name, email };
    users1.push(newUser);
    res.status(201).json(newUser);
});

// Update user by ID
app.put('/users/:id', (req, res) => {
    const id = Number(req.params.id);
    const userIndex = users1.findIndex(user => user.id === id);

    if (userIndex === -1) {
        return res.status(404).json({ message: 'User not found' });
    }

    const { first_name, last_name, email } = req.body;

    // Update only if fields are provided
    if (first_name) users1[userIndex].first_name = first_name;
    if (last_name) users1[userIndex].last_name = last_name;
    if (email) users1[userIndex].email = email;

    res.json(users1[userIndex]);
    
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});