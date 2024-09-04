import React from 'react';

const Problem = ({ title, link, content }) => (
	<div className="my-4">
		<h3 className="text-lg font-bold text-left mt-0">{title}</h3>
		<p>
			Practice this problem on LeetCode{' '}
			<a href={link} className="text-blue-600 underline cursor-pointer">
				here
			</a>
			.
		</p>
		<div className="mt-2" dangerouslySetInnerHTML={{ __html: content }} />
	</div>
);

export default Problem;
