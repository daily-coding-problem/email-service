const express = require("express");
const axios = require("axios");
const React = require("react");
const router = express.Router();

const API_SERVICE = process.env.API_SERVICE || "http://localhost:8080";

router.get("/", async (req, res) => {
	try {
		// Send a GET request to the API_SERVICE/api/v1/problem/random endpoint
		const response = await axios.get(`${API_SERVICE}/api/v1/problem/random`);

		// Return the API response data to the client
		res.json(response.data);
	} catch (error) {
		// Handle any errors that occur during the request
		console.error("Error fetching data from API:", error.message);

		// Return an error response to the client
		res.status(500).json({ error: "Failed to fetch data from API" });
	}
});

module.exports = router;
