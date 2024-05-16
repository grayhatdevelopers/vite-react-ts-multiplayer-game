export async function preloadAssets() {
    try {
        const assetsContext = import.meta.glob(
            '/src/assets/**/*.{jpg,jpeg,png,mp3,ogg,wav}',
            { eager: true }
        )

        // Get the asset URLs
        const assetUrls = Object.values(assetsContext).map(
            (module) => module.default
        )

        console.log('[preloadAssets] assetUrls', assetUrls)

        // Preload assets
        const promises = assetUrls.map((url) => {
            if (
                url.endsWith('.mp3') ||
                url.endsWith('.ogg') ||
                url.endsWith('.wav')
            ) {
                // Preload audio
                const audio = new Audio()
                audio.src = url
                audio.muted = true
                return new Promise((resolve) => {
                    audio.onloadeddata = resolve
                })
            } else {
                // Preload image
                const img = new Image()
                img.src = url
                return new Promise((resolve) => {
                    img.onload = resolve
                })
            }
        })

        await Promise.all(promises)
    } catch (error) {
        console.error(
            '[preloadAssets] There was an error while preloading assets. Reason:',
            error
        )
    }
}
