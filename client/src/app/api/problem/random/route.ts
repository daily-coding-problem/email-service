import axios from 'axios';
import {NextRequest, NextResponse} from "next/server";

const API_SERVICE = process.env.API_SERVICE || 'http://localhost:8080';

export async function GET(req: NextRequest, res: NextResponse) {
	try {
		// Send a GET request to the API_SERVICE/api/v1/problem/random endpoint
		const response = await axios.get(`${API_SERVICE}/api/v1/problems/random`);

		// Return the API response data to the client
		return NextResponse.json(response.data);
	} catch (error: Error | any) {
		// Handle any errors that occur during the request
		console.error('Error fetching data from API:', error.message);

		// Return an error response to the client
		return NextResponse.json({ error: 'Failed to fetch data from API' }, { status: 500 });
	}
}
