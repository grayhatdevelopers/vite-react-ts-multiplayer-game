// This file should be the main entrypoint, and control routing, providers and initial loadings

import { Outlet } from 'react-router-dom';

const MainLayout = () => {
	return (
		<>
			<div
				style={{
					background: '#000',
					height: '100vh',
					width: '100vw',
				}}
			>
				<Outlet />
			</div>
		</>
	);
};

export default MainLayout;
