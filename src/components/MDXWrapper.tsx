import {ReactNode} from "react";
import {Paper} from "@mui/material";
import "katex/dist/katex.min.css";
import mermaid from "mermaid";

function get() {

}

mermaid.initialize({startOnLoad: false})
export default function MDXWrapper({children}: { children?: ReactNode }) {
    return (
        <Paper sx={{padding: 2}} className="markdown-body" ref={element => {
            if (!element) return
            mermaid.run({nodes: element.querySelectorAll('pre>code.language-mermaid')}).catch(console.error)
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
