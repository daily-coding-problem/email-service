const portfinder = require('portfinder');

const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

require('@babel/register')({
	presets: ['@babel/preset-env', '@babel/preset-react']
});

const app = require('./src/app');

const PORT = process.env.PORT || 3000;

// Swagger setup
const swaggerOptions = {
	swaggerDefinition: {
		openapi: '3.0.0',
		info: {
			title: 'Email Generation API',
			version: '1.0.0',
			description: 'API documentation for the email generation service',
		},
		servers: [
			{
				url: 'http://localhost:3000',
				description: 'Local server',
			},
		],
	},
	apis: ['./src/**/*.js'], // Path to the API docs (adjust as needed)
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Start the server
portfinder.getPortPromise({ port: PORT }).then((port) => {
	app.listen(port, () => {
		console.log(`Server running on port ${port}`);
	});
});
