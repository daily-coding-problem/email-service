"use client";

import React, { useState, useEffect } from 'react';
import { Problem } from '@/app/types/Problem';
import axios from 'axios';
import DailyCodingProblem from "../../../../emails/DailyCodingProblem";
import CircularIndeterminate from "@/app/components/CircularIndeterminate";

export default function Page() {
	const [problem, setProblem] = useState<Problem | null>(null);
	const [loading, setLoading] = useState(true); // Loading state

	useEffect(() => {
		const fetchProblem = async () => {
			try {
				// Determine the base URL based on the environment
				const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3001';

				// Fetch from the internal Next.js API route
				const response = await axios.get(`${baseUrl}/api/problem/random`);
				setProblem(response.data);
			} catch (error) {
				console.error('Error fetching problem:', error);
				// Handle error (you might want to display an error message)
			} finally {
				setLoading(false); // Set loading to false after fetching
			}
		};

		fetchProblem();
	}, []);

	if (loading) {
		return <CircularIndeterminate />; // Display loading spinner while fetching data
	}

	return (
		<>
			{problem ? (
				<DailyCodingProblem
					title={problem.title}
					link={problem.link}
					content={problem.content}
					solution={problem.solution}
				/>
			) : (
				<div className="flex items-center justify-center h-[100vh] bg-[#f3f4f6] text-black">No problem found</div>
			)}
		</>
	);
}
