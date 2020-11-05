import React from 'react'

import 'antd/dist/antd.css'

import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from 'src/styles/global'
import theme from 'src/styles/theme'

import api from 'src/services/api'
import { ApolloProvider } from '@apollo/react-hooks'

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ApolloProvider client={api}>
            <ThemeProvider theme={theme}>
                <Component {...pageProps} />
                <GlobalStyle />
            </ThemeProvider>
        </ApolloProvider>
    )
}
