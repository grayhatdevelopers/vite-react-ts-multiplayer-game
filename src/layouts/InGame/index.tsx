import FullPage from '@/components/FullPage';
import { Outlet } from 'react-router-dom';

const InGameLayout = () => {
	return (
		<FullPage
			// className='content'
			style={{
				backgroundColor: 'red',
				marginTop: 'env(safe-area-inset-top)',
			}}
		>
			<Outlet />
		</FullPage>
	);
};

export default InGameLayout;
