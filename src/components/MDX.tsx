import {ReactNode} from "react";
import {Container, Paper, useTheme} from "@mui/material";
import "katex/dist/katex.min.css";

const thLight = 'https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.2.0/github-markdown-light.min.css'
const thDark = 'https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.2.0/github-markdown-dark.min.css'
const hlLight = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/github.min.css'
const hlDark = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/github-dark.min.css'

export default function MDX({children}: { children?: ReactNode }) {
    return <Container component="main" sx={{py: 3}}>
        {useTheme().palette.mode === 'dark' ? <>
            <link rel="stylesheet" href={thDark}/>
            <link rel="stylesheet" href={hlDark}/>
        </> : <>
            <link rel="stylesheet" href={thLight}/>
            <link rel="stylesheet" href={hlLight}/>
        </>}
        <Paper sx={{padding: 2}} className="markdown-body">
            {children}
        </Paper>
    </Container>
}
