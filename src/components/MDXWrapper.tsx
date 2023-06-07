import {ReactNode, useEffect, useRef} from "react";
import {Paper, useTheme} from "@mui/material";
import "katex/dist/katex.min.css";
import mermaid from "mermaid";

export default function MDXWrapper({children}: { children?: ReactNode }) {
    const dark = useTheme().palette.mode === 'dark'
    const ref = useRef<HTMLDivElement | null>()
    const pro = useRef(Promise.resolve())
    useEffect(() => {
        const promise = pro.current
        if (!promise) return
        pro.current = promise.then(() => {
            const element = ref.current
            if (!element) return
            const nodes = element.querySelectorAll<HTMLElement>('pre>code.language-mermaid')
            nodes.forEach(node => {
                const {dataset} = node
                node.textContent = dataset.raw ?? ''
                delete dataset.processed
            })
            mermaid.initialize({startOnLoad: false, theme: dark ? 'dark' : 'default'})
            return mermaid.run({nodes}).catch(console.error)
        })
    }, [dark])
    const darkRef = useRef(dark)
    return (
        <Paper sx={{padding: 2}} className="markdown-body" ref={element => {
            if (!element) return
            if (ref.current) return
            ref.current = element
            const nodes = element.querySelectorAll<HTMLElement>('pre>code.language-mermaid')
            nodes.forEach(node => {
                const {dataset} = node
                dataset.raw = node.textContent ?? undefined
            })
            mermaid.initialize({startOnLoad: false, theme: darkRef.current ? 'dark' : 'default'})
            pro.current = mermaid.run({nodes}).catch(console.error)
            const {hash} = location
            if (hash === '') return
            let id
            try {
                id = decodeURIComponent(hash.slice(1)).toLowerCase()
            } catch (e) {
                console.error(e)
                return
            }
            element.querySelector(`#${CSS.escape(id)},#${CSS.escape(encodeURIComponent(id))}`)?.scrollIntoView()
        }}>
            {children}
        </Paper>
    )
}
