import React from 'react';

import {Html, Tailwind} from "@react-email/components";
import DailyCodingProblem from "./DailyCodingProblem";

const EmailTemplate = ({ title, link, content, solution, unsubscribeToken = '#' }) => {
	// Add the "pre-wrap" class to all <pre> tags in the content
	const processedContent = content.replace(/<pre>/g, '<pre style="white-space: pre-wrap">');

	return (
		<Html>
			<Tailwind
				config={{
					theme: {
						extend: {
							colors: {
								brand: "#5046e5",
							},
						},
					},
				}}
			>
				<DailyCodingProblem
					title={title}
					link={link}
					content={processedContent}
					solution={solution}
					unsubscribeToken={unsubscribeToken}
				/>
			</Tailwind>
		</Html>
	)
};

export default EmailTemplate;
