import type {AppProps} from 'next/app'
import {createTheme, CssBaseline, ThemeProvider, useMediaQuery} from "@mui/material";
import {ReactNode, useMemo} from "react";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {MDXProvider} from "@mdx-js/react"
import mdxComponents from "@/mdxComponents";
import Main from "@/components/Main";
import MDXWrapper from "@/components/MDXWrapper";

const 浅色主题 = 'https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.2.0/github-markdown-light.min.css';
const 深色主题 = 'https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.2.0/github-markdown-dark.min.css'
const 浅色高亮 = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/github.min.css'
const 深色高亮 = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/github-dark.min.css'

export default function App({Component, pageProps}: AppProps) {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode: prefersDarkMode ? 'dark' : 'light',
                },
                typography: {
                    fontSize: 12,
                },
            }),
        [prefersDarkMode],
    )
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            {prefersDarkMode ? <>
                <link rel="stylesheet" href={深色主题}/>
                <link rel="stylesheet" href={深色高亮}/>
            </> : <>
                <link rel="stylesheet" href={浅色主题}/>
                <link rel="stylesheet" href={浅色高亮}/>
            </>}
            <MDXProvider components={{
                ...mdxComponents,
                wrapper: MainMDXWrapper
            }}>
                <Component {...pageProps}/>
            </MDXProvider>
        </ThemeProvider>
    )
}

function MainMDXWrapper({children}: { children?: ReactNode }) {
    return (
        <Main>
            <MDXWrapper>
                {children}
            </MDXWrapper>
        </Main>
    )
}
