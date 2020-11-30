import React from 'react'
import ReactDOM from 'react-dom'

import RouterProvider from './RouterProvider'

import 'antd/dist/antd.css'
import GlobalStyle from 'Style/global'

import theme from 'Style/theme'
import {ThemeProvider} from 'styled-components'

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <RouterProvider />
        <GlobalStyle />
    </ThemeProvider>,
    document.getElementById('root'),
)
