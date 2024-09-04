import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function CircularIndeterminate() {
	return (
		<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', bgcolor: '#f3f4f6' }}>
			<CircularProgress
				sx={{ color: '#5046e5' }}
			/>
		</Box>
	);
}
