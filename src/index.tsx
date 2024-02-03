import './index.css';

import { useState, useEffect } from 'react'

import { GameRouter } from './modules/gameRouter';
import { MemoryRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
	BrowserRouter,
	Routes,
	Route,
	UNSAFE_LocationContext,
} from 'react-router-dom';

import CreateOrJoinRoom from './screens/CreateOrJoinRoom';
import { preloadAssets } from './utils/preload';
import LoadingGame from './screens/LoadingGame';

const Root = () => {

	const [isLoadingAssets, setIsLoadingAssets] = useState(true)

	const _preloadAssets = async () => {
		await preloadAssets()
		setIsLoadingAssets(false)
	}

	useEffect(() => {
		_preloadAssets()
	}, [])

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route
						path=""
						element={
							isLoadingAssets ? <LoadingGame /> : <CreateOrJoinRoom />
						}
					/>
					<Route
						path="/play"
						element={
							<>
								<div
									hidden
									className='absolute'
								/>
								{/* eslint-disable-next-line react/jsx-pascal-case */}
								<UNSAFE_LocationContext.Provider
									value={null}
								>
									<MemoryRouter>
										<GameRouter />
									</MemoryRouter>
								</UNSAFE_LocationContext.Provider>
							</>
						}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<React.StrictMode>
		<Root />
	</React.StrictMode>
);
