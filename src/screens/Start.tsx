import { useEffect } from 'react'

import { myPlayer, useIsHost } from 'playroomkit'

import FullPage from '../components/FullPage'
import { navigate } from '@/utils/react-router-multiplayer'

const StartScreen = () => {
    const isHost = useIsHost()

    const myPlayerState = myPlayer()

	const handleStartGame = () => {
		navigate('/play/game/new')
	}

    useEffect(() => {
        // Set player's joining timestamp
        if (myPlayerState && !myPlayerState.getState('joinedAt')) {
            myPlayerState.setState('joinedAt', Date.now())
        }
    }, [myPlayerState])

    return (
        <FullPage
            className='bg-blue-500'
        >
            <div className="flex flex-col items-center justify-center gap-8">
                Start screen
                <div>
                    {isHost && (
                        <div className="flex flex-col gap-2 font-bold">
                            You're the host!
                            <button
                                onClick={handleStartGame}
                            >
                                Start game
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </FullPage>
    )
}

export default StartScreen
