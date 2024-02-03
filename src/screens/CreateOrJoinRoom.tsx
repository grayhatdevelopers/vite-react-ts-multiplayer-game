import { useNavigate } from 'react-router-dom'
import FullPage from '@/components/FullPage'

import reactLogoImg from '@/assets/img/react-logo.png'

const CreateOrJoinRoom = () => {
    const navigate = useNavigate()

    const handleCreateRoom = () => {
        navigate('/play')
    }

    const handleJoinRoom = () => {
        const roomCode = prompt('Enter room code')
        if (roomCode) navigate('/play#r=R' + roomCode)
    }

    return (
        <FullPage className="gap-12 overflow-auto">
            <main className="h-full w-full flex flex-col justify-center items-center gap-8">
                <img
                    alt="React logo"
                    src={reactLogoImg}
                    className="h-40 w-40"
                />
                <div className="w-full flex flex-col justify-center items-center gap-4">
                    <button onClick={handleCreateRoom}>CREATE ROOM</button>
                    <button onClick={handleJoinRoom}>JOIN ROOM</button>
                </div>
            </main>
        </FullPage>
    )
}

export default CreateOrJoinRoom
