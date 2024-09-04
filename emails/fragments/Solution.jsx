import React from 'react';

const Solution = ({ solution }) => (
	<div className="my-4">
		<div dangerouslySetInnerHTML={{ __html: solution }} />
	</div>
);

export default Solution;
