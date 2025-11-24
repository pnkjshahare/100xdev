const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Middleware to parse request body
app.use(bodyParser.urlencoded({ extended: false }));

// Connect to MongoDB
mongoose.connect('mongodb+srv://admin:admin%40123@cluster0.qc29a.mongodb.net/LoginData', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});

// Define a Mongoose schema and model for users
const userSchema = new mongoose.Schema({
    email: String,
    password: String
});

const User = mongoose.model('User', userSchema);

// Handle the POST request for login form
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    // Create a new user instance with the form data
    const newUser = new User({
        email: email,
        password: password
    });

    // Save the user to the MongoDB database
    newUser.save()
        .then(() => {
            res.send('User saved successfully to MongoDB');
        })
        .catch((err) => {
            console.error('Error saving user:', err);
            res.status(500).send('Error saving user to MongoDB');
        });
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
