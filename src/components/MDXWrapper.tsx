import {ReactNode, useEffect} from "react";
import {Paper} from "@mui/material";
import "katex/dist/katex.min.css";

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
    return (
        <Paper sx={{padding: 2}} className="markdown-body">
            {children}
        </Paper>
    )
}
