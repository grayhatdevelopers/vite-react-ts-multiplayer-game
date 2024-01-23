import './index.css';

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

const Root = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route
						path=""
						element={
							<CreateOrJoinRoom />
						}
					/>
					<Route
						path="/play"
						element={
							<>
								<div
									hidden
									style={{ position: 'absolute' }}
								/>
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
