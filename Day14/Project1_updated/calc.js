const express = require('express');
const hbs = require('hbs');
const path = require('path');

const app = express();
const port = 3000;

// Set up Handlebars as the view engine
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// GET route to display the form
app.get('/', (req, res) => {
    res.render('calc');
});

// POST route to handle calculation
app.post('/calculate', (req, res) => {
    const { num1, num2 } = req.body;
    let result = '';

    // Check if both inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
        result = Number(num1) + Number(num2);
    } else {
        result = 'Invalid input. Please enter numbers.';
    }

    // Render the page with the result
    res.render('calc', { result: result });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});