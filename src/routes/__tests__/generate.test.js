const request = require('supertest');
const app = require('../../app');

// Mock the @react-email/render module
jest.mock('@react-email/render', () => ({
	render: jest.fn(() => '<div>Mocked HTML</div>'),
}));

describe('POST /email/generate', () => {
	it('should return 200 and generate HTML when valid data is sent', async () => {
		const response = await request(app)
			.post('/api/v1/email/generate')
			.send({
				title: 'Sample Problem',
				link: 'https://leetcode.com',
				content: 'This is a sample problem.',
				solution: 'This is a sample solution.',
			});

		expect(response.status).toBe(200);
		expect(response.text).toBeDefined();
		expect(response.text).toBe('<!DOCTYPE html><div>Mocked HTML</div>'); // Ensure mocked HTML is returned
	});

	it('should return 400 when missing required fields', async () => {
		const response = await request(app)
			.post('/api/v1/email/generate')
			.send({
				title: 'Sample Problem',
				link: 'https://leetcode.com',
				// Missing 'content'
				// Missing 'solution', but it's optional
			});

		expect(response.status).toBe(400);
		expect(response.body.error).toBe('Invalid input data');
	});
});
