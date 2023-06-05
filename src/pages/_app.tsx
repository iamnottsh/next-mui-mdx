import type {AppProps} from 'next/app'
import {createTheme, CssBaseline, ThemeProvider, useMediaQuery} from "@mui/material";
import {useMemo} from "react";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {MDXProvider} from "@mdx-js/react"
import MDX from "@/components/MDX";
import {Components} from "@mdx-js/react/lib";
import Counter from "@/components/Counter";

export const components: Components = {
    wrapper: MDX,
    Counter,
}

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
            <MDXProvider components={components}>
                <Component {...pageProps}/>
            </MDXProvider>
        </ThemeProvider>
    )
}
