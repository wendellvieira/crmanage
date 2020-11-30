import React from 'react'

import ApolloProviderFactory from './components/ApolloProviderFactory'
import RouterProviderFactory from './components/RouterProviderFactory'
import ThemeProviderFactory from './components/ThemeProviderFactory'

export default function App(): JSX.Element {
    return (
        <ApolloProviderFactory>
            <ThemeProviderFactory>
                <RouterProviderFactory />
            </ThemeProviderFactory>
        </ApolloProviderFactory>
    )
}
