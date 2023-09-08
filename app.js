// Import required modules
const express = require('express');
const bodyParser = require('body-parser');

// Create an Express application
const app = express();

// Use bodyParser middleware to parse JSON requests
app.use(bodyParser.json());

// Define a user_id based on your criteria
const user_id = "john_doe_17091999";

// POST method endpoint
app.post('/bfhl', (req, res) => {
  const data = req.body.data || [];

  // Extract alphabets and numbers from the input data
  const numbers = data.filter(item => !isNaN(item));
  const alphabets = data.filter(item => isNaN(item) && item.length === 1);

  // Determine the highest alphabet (case insensitive)
  const highest_alphabet = alphabets.length > 0 ? [alphabets.reduce((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }) === -1 ? b : a)] : [];

  // Prepare the response object
  const response = {
    is_success: true,
    user_id,
    email: "john@xyz.com",
    roll_number: "ABCD123",
    numbers,
    alphabets,
    highest_alphabet
  };

  res.json(response);
});

// GET method endpoint
app.get('/bfhl', (req, res) => {
  // Respond with a predefined operation_code
  res.json({ operation_code: 1 });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
