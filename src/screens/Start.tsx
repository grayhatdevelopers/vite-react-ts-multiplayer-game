import * as React from 'react';

import {
	myPlayer,
	useIsHost,
} from 'playroomkit';

import FullPage from '../components/FullPage';
import { navigate } from '@/utils/react-router-multiplayer';

const StartScreen = () => {

	const isHost = useIsHost();

	const myPlayerState = myPlayer();

	React.useEffect(() => {
		// Set player's joining timestamp
		if (myPlayerState && !myPlayerState.getState('joinedAt')) {
			myPlayerState.setState('joinedAt', Date.now());
		}
	}, [myPlayerState]);


	return (
		<FullPage style={{
			background: 'blue'
		}}>
			<div className='flex flex-col items-center justify-center gap-8'>
                                Start screen
				<div>
					{
						isHost && <div className='flex flex-col gap-2 font-bold'>
                                You're the host!
							<button onClick={() => {
								navigate('/play/game/new');
							}}>Move to game</button>
						</div>
					}
				</div>
			</div>
		</FullPage>
	);
};


export default StartScreen;
