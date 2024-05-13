import { Outlet } from 'react-router-dom';

const InGameScreen = () => {

	return (
		<>
			<div className='flex flex-col'>
                In game!
			</div>
			<Outlet />
		</>
	);
};

export default InGameScreen;
