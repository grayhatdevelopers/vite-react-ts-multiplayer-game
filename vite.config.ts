import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react-swc';
import { VitePWA } from 'vite-plugin-pwa';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
	base: '/',
	plugins: [
		react(),
		eslint(),
		ViteImageOptimizer(),
		VitePWA({
			registerType: 'autoUpdate',
			// Cache our game assets, like images and sfx
			includeAssets: ['src/assets/**/*'],
			workbox: {
				globPatterns: [
					'**/*.{js,css,html,png}', 
				],
				// Ignore websocket caching by ignoring non-http/s requests
				// This will prevent PlayroomKit requests from being cached.
				ignoreURLParametersMatching: [/^http/],
			},
		}),
	],
	define: {
		'process.env.NODE_ENV': `'${process.env.NODE_ENV}'`,
	},
	server: {
		port: 3000,
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src/'),
		},
	},
});
