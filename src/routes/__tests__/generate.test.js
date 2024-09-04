import request from 'supertest';
import app from '../../app';

describe('POST /email/generate', () => {
	it('should return 200 and generate HTML when valid data is sent', async () => {
		const response = await request(app)
			.post('/mail/generate')
			.send({
				title: 'Sample Problem',
				link: 'https://leetcode.com',
				content: 'This is a sample problem.',
				solution: 'This is a sample solution.',
			});

		expect(response.status).toBe(200);
		expect(response.body.html).toBeDefined();
	});

	it('should return 400 when missing required fields', async () => {
		const response = await request(app)
			.post('/mail/generate')
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
