import React, { useLayoutEffect, useRef } from 'react'
import { createRoot } from 'react-dom/client'

/**
 * This is just a temporary solution to allow the nested `MemoryRouter` until
 * `react-router` supports it out of the box.
 *
 * @see https://github.com/remix-run/react-router/pull/9112#issuecomment-1241077187
 */
const MemoryRouterContextWrapper = ({ children }) => {
    const ref = useRef(null)

    useLayoutEffect(() => {
        const root = ref.current && createRoot(ref.current)

        root?.render(<React.Suspense fallback="...">{children}</React.Suspense>)

        return () => {
            setTimeout(() => {
                root?.unmount()
            })
        }
    }, [])

    return <div ref={ref} className="w-full h-full overflow-hidden" />
}

export default MemoryRouterContextWrapper
