const React = require('react');
const express = require('express');
const { render } = require('@react-email/render');

const DailyCodingProblem = require('../../emails/DailyCodingProblem').default;
const { Problem } = require('../models/Problem');

const router = express.Router();

// Define the /generate endpoint
router.post('/generate', async (req, res) => {
	const { title, link, content, solution } = req.body;

	// Basic input validation
	if (!title || !link || !content) {
		return res.status(400).json({ error: 'Invalid input data' });
	}

	// Create a Problem instance
	const problem = new Problem(title, link, content, solution);

	// Generate HTML using the Problem instance
	const html = await render(
		<DailyCodingProblem
			title={problem.title}
			link={problem.link}
			content={problem.content}
			solution={problem.solution}
		/>, {
		pretty: true
	});

	res.send(`<!DOCTYPE html>${html}`);
});

module.exports = router;
