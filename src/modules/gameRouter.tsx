import Main from '@/layouts/main';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import navigationService from '@/utils/react-router-multiplayer/NavigationService';

import { insertCoin, useMultiplayerState } from 'playroomkit';

import InGameLayout from '@/layouts/InGame';

import LoadingRoom from '@/screens/LoadingRoom';
import StartScreen from '@/screens/Start';
import InGameScreen from '@/screens/InGame';

async function initializeSdk() {
	try {

		const baseUrlOptions =
            process.env.NODE_ENV === 'development'
            	? {
            		baseUrl: import.meta.env.VITE_LOCAL_IP_ADDRESS,
            	}
            	: {};

		try {
			await insertCoin({
				...baseUrlOptions,
			});
		} catch (error) {
			console.log(error);
			return { error };
		}
	} catch (error) {
		console.log(error);
		return { error };
	}
	return { error: undefined };
}

export const GameRouter = () => {
	const [ isSdkInitialized, setIsSdkInitialized ] = useState(false);

	// @ts-ignore
	const [router] = useMultiplayerState('router');

	useEffect(() => {
		initializeSdk().then(() => {
			setIsSdkInitialized(true);
		});
	}, []);

	// There may be a better way to access the history stack :p
	const [temp_history, setTempHistory] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		navigationService.navigate = navigate;
	}, [navigate]);

	const location = useLocation();

	useEffect(() => {
		console.log('[location] location is:', location);
		setTempHistory((oldVal) => [...oldVal, location]);
	}, [location]);

	useEffect(() => {
		if (router) {
			if (
				temp_history.find((entry) => {
					return (
						entry.state?.actionTimestamp === router.actionTimestamp
					);
				})
			) {
				console.info(
					'[Router] Found this state change in history! Ignore.'
				);
			} else {
				console.info('[Router] New state. Change!');
				const { props, actionTimestamp } = router;
				navigate(router.state, { ...props, actionTimestamp });
			}
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [router]);

	return (
	// TODO: Figure out page transitions with nested routes
	// AnimatePresence standard technique didn't work
		<Routes>
			<Route path="/" element={<Main />}>
				<Route
					index
					element={
						!isSdkInitialized ? (
							<LoadingRoom />
						) : (
							<StartScreen />
						)
					}
				/>
				<Route path="game" element={<InGameLayout />}>
					<Route path="new" element={<InGameScreen />} />
				</Route>
			</Route>
		</Routes>
	);
};
