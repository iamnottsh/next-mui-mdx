import {ReactNode, useEffect, useRef} from "react";
import {Paper, useTheme} from "@mui/material";
import "katex/dist/katex.min.css";
import mermaid from "mermaid";

export default function MDXWrapper({children}: { children?: ReactNode }) {
    useEffect(() => {
        let hash
        try {
            hash = decodeURIComponent(location.hash.slice(1)).toLowerCase()
        } catch {
            return
        }
        document.getElementById(hash)?.scrollIntoView()
    }, [])
    const raw = useRef<HTMLDivElement | null>()
    const ref = useRef<HTMLElement | null>()
    const dark = useTheme().palette.mode === 'dark'
    useEffect(() => {
        const rawCurrent = raw.current
        if (!rawCurrent) return
        const refCurrent = ref.current
        if (!refCurrent) return
        const newNode = rawCurrent.cloneNode(true) as HTMLDivElement
        refCurrent.replaceChildren(newNode)
        mermaid.initialize({startOnLoad: false, theme: dark ? 'dark' : 'default'})
        mermaid.run({nodes: newNode.querySelectorAll('pre>code.language-mermaid')}).catch(console.error)
    }, [dark])
    return (
        <Paper sx={{padding: 2}} className="markdown-body" ref={element => {
            if (!element) return
            if (!raw.current) raw.current = element
            if (!ref.current) ref.current = element.parentElement
        }}>
            {children}
        </Paper>
    )
}
