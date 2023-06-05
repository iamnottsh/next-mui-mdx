import type {AppProps} from 'next/app'
import {createTheme, CssBaseline, ThemeProvider, useMediaQuery} from "@mui/material";
import {useMemo} from "react";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {MDXProvider} from "@mdx-js/react"
import MDX from "@/components/MDX";

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
            <MDXProvider components={{wrapper: MDX}}>
                <Component {...pageProps}/>
            </MDXProvider>
        </ThemeProvider>
    )
}
