// This file should be the main entrypoint, and control routing, providers and initial loadings

import { Outlet } from 'react-router-dom'

const MainLayout = () => {
    return (
        <>
            <div className="bg-black h-screen w-screen">
                <Outlet />
            </div>
        </>
    )
}

export default MainLayout
