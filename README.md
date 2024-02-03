# %GAME_NAME%

A bootstrapped game template with multiplayer with PlayroomKit, built with multiplayer routing in mind.

Best used with [create-multiplayer-game](https://github.com/grayhatdevelopers/create-multiplayer-game).

## Features
- **🎮 Multiplayer, out-of-box**: Batteries-included for multiplayer, using [PlayroomKit](https://docs.joinplayroom.com/setup). If the host navigates to a screen, **everyone navigates**! (This, of course, is controlled through a variable called `broadcast`. If broadcast is false, only the user themselves navigate to the route)
- **🚧 Silent routing**: This game follows "silent" routing patterns. The game's phases are controlled by the route, however the route isn't visible to the player (it's stored in memory), giving a nice feel. Players only see `/play`.
- **🐡 PWA Compatible**: Using [PWABuilder](https://www.pwabuilder.com/), deploy this game to App Store, Play Store, Microsoft Store, and Quest, with just a bit of configuration!
- **⚡️ Asset Preloading**: Integrated some basic asset loading, to prevent players from seeing loading screens for images.
- **✨ Asset Optimization and Caching**: Integrated some heavy PWA caching to ensure the game doesn't need to do too many unnecessary network calls. Also added some image optimization to compress images before builds.
- **📺 Template screens**: This template comes with some nice screens which you might want to have in your game. Completely unstyled.

For reference on how a template like this can turn into a final product, check out:
- [Meme, Chat, Robots!](memechatrobots.grayhat.studio)
- [Death by AI](deathbyai.gg)

## Available Scripts

In the project directory, you can run:

### `pnpm dev`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

Preferably, Player 1 should be on your computer.
You can also use your phone as Player 2, as long as your phone and your computer are on the same network.

### `pnpm build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
