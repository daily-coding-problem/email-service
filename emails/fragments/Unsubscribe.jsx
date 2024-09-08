import React from 'react';

const API_SERVICE_URL = process.env.REACT_APP_API_SERVICE || 'http://localhost:8080/api/v1/subscriptions';

const Unsubscribe = ({unsubscribeToken = '#'}) => {
	let unsubscribeUrl = `${API_SERVICE_URL}/unsubscribe?token=${unsubscribeToken}`;

	if (unsubscribeToken === '#') {
		unsubscribeUrl = '#';
	}

	return (
		<div className="border-t border-gray-200 mt-6 pt-6 w-full">
			<p className="text-base">
				Want to take a break?{' '}
				<a href={unsubscribeUrl} className="text-blue-600 underline cursor-pointer">
					snooze or unsubscribe
				</a>
			</p>
		</div>
	)
};

export default Unsubscribe;
