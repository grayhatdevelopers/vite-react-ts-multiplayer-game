import FullPage from '@/components/FullPage';
import { Outlet } from 'react-router-dom';

const InGameLayout = () => {
	return (
		<FullPage
			// className='content'
			className="bg-red-500 mt-safe"
		>
			<Outlet />
		</FullPage>
	);
};

export default InGameLayout;
