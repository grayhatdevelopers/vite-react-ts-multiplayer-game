import { useNavigate } from 'react-router-dom';
import FullPage from '@/components/FullPage';

import reactLogoImg from '@/assets/img/react-logo.png';

const CreateOrJoinRoom = () => {
	const navigate = useNavigate();

	return (
		<FullPage
			style={{
				gap: '3rem',
				overflow: 'auto',
			}}
		>
			<main className="h-full w-full flex flex-col justify-center items-center gap-8">
				<img
					alt="React logo"
					src={reactLogoImg}
					className='h-40 w-40'
				/>
				<div className="w-full flex flex-col justify-center items-center gap-4">
					<button
						onClick={() => {
							navigate('/play');
						}}
					>
                                CREATE ROOM
					</button>
					<button
						onClick={() => {
							const roomCode = prompt('Enter room code');
							if (roomCode) navigate('/play#r=R' + roomCode);
						}}>
                                JOIN ROOM
					</button>
				</div>

			</main>

		</FullPage>
	);
};

export default CreateOrJoinRoom;
