const express = require('express');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

const email = require('./routes/email');
const problem = require('./routes/problem');

// Initialize Express app
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Set security-related HTTP headers
app.use(helmet());

// Rate limiter middleware
const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100, // Limit each IP to 100 requests per windowMs
	message: 'Too many requests from this IP, please try again later.',
});

// Apply rate limiting middleware
app.use(limiter);

// Use the email routes
app.use('/api/v1/email', email);

// Use the problem routes
app.use('/api/v1/problem', problem);

module.exports = app;
