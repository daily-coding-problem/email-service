import React from 'react';

import {Html, Tailwind} from "@react-email/components";
import DailyCodingProblem from "./DailyCodingProblem";

const EmailTemplate = ({ title, link, content, solution }) => (
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
				content={content}
				solution={solution}
			/>
		</Tailwind>
	</Html>
);

export default EmailTemplate;
