import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    *,
    *:before,
    *:after {
    box-sizing: inherit;
    }

    .bg-white {
        background-color: #fff !important;
    }

    html {
    box-sizing: border-box;
    font-size: 14px;
    -ms-overflow-style: -ms-autohiding-scrollbar;
    }

    body {
    background-color: var(--backgroundColor);
    -ms-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    }

    .text-left {
    text-align: left !important;
    }

    .text-right {
    text-align: right !important;
    }

    .text-center {
    text-align: center !important;
    }

    .m-0 {
    margin: 0 !important;
    }

    .mt-0,
    .my-0 {
    margin-top: 0 !important;
    }

    .mr-0,
    .mx-0 {
    margin-right: 0 !important;
    }

    .mb-0,
    .my-0 {
    margin-bottom: 0 !important;
    }

    .ml-0,
    .mx-0 {
    margin-left: 0 !important;
    }

    .m-1 {
    margin: 0.25rem !important;
    }

    .mt-1,
    .my-1 {
    margin-top: 0.25rem !important;
    }

    .mr-1,
    .mx-1 {
    margin-right: 0.25rem !important;
    }

    .mb-1,
    .my-1 {
    margin-bottom: 0.25rem !important;
    }

    .ml-1,
    .mx-1 {
    margin-left: 0.25rem !important;
    }

    .m-2 {
    margin: 0.5rem !important;
    }

    .mt-2,
    .my-2 {
    margin-top: 0.5rem !important;
    }

    .mr-2,
    .mx-2 {
    margin-right: 0.5rem !important;
    }

    .mb-2,
    .my-2 {
    margin-bottom: 0.5rem !important;
    }

    .ml-2,
    .mx-2 {
    margin-left: 0.5rem !important;
    }

    .m-3 {
    margin: 1rem !important;
    }

    .mt-3,
    .my-3 {
    margin-top: 1rem !important;
    }

    .mr-3,
    .mx-3 {
    margin-right: 1rem !important;
    }

    .mb-3,
    .my-3 {
    margin-bottom: 1rem !important;
    }

    .ml-3,
    .mx-3 {
    margin-left: 1rem !important;
    }

    .m-4 {
    margin: 1.5rem !important;
    }

    .mt-4,
    .my-4 {
    margin-top: 1.5rem !important;
    }

    .mr-4,
    .mx-4 {
    margin-right: 1.5rem !important;
    }

    .mb-4,
    .my-4 {
    margin-bottom: 1.5rem !important;
    }

    .ml-4,
    .mx-4 {
    margin-left: 1.5rem !important;
    }

    .m-5 {
    margin: 3rem !important;
    }

    .mt-5,
    .my-5 {
    margin-top: 3rem !important;
    }

    .mr-5,
    .mx-5 {
    margin-right: 3rem !important;
    }

    .mb-5,
    .my-5 {
    margin-bottom: 3rem !important;
    }

    .ml-5,
    .mx-5 {
    margin-left: 3rem !important;
    }

    .logo {
    display: flex;
    align-items: center;
    margin-right: 1rem;
    font-size: 1.25rem;
    white-space: nowrap;
    color: var(--primaryColor);
    justify-content: center;
    }

    .logo > svg {
    fill: var(--primaryColor);
    }

    .text-disabled {
    color: var(--textColorSecondary) !important;
    }

    .ant-menu-item {
        display: flex;
        align-items: center;
    }
    .ant-menu-inline-collapsed .ant-menu-item {
        justify-content: center;
        padding: 0 !important;
    }
    .ant-menu-item > .menu-icon {
        margin-right: 10px;
        min-width: 1em;
        min-height: 1em;
    }
    .ant-menu-inline-collapsed .ant-menu-item > .menu-icon {
        min-width: 1.5em;
        min-height: 1.5em;
        margin-right: 0px;
    }
    .ant-menu-inline-collapsed .ant-menu-item > span {
        display: inline-block;
        max-width: 0;
        opacity: 0;
    }

    .ant-menu-item > span, .ant-menu-item > .menu-icon {
        opacity: 1;
        transition:
            opacity .3s cubic-bezier(.645,.045,.355,1),
            width .3s cubic-bezier(.645,.045,.355,1),
            height .3s cubic-bezier(.645,.045,.355,1);
    }

`
