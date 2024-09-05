import React from 'react';

import {Html, Tailwind} from "@react-email/components";

import Header from './fragments/Header';
import Footer from './fragments/Footer';
import Problem from './fragments/Problem';
import Solution from './fragments/Solution';
import Unsubscribe from './fragments/Unsubscribe';

const DailyCodingProblem = ({title, link, content, solution}) => (
	<div className="bg-gray-100 text-black">
		<Header/>
		<div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
			<Problem title={title} link={link} content={content}/>
			{solution && <Solution solution={solution}/>}
			<Unsubscribe/>
		</div>
		<Footer/>
	</div>
);

export default DailyCodingProblem;
