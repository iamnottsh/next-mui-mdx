import {MDXRemoteSerializeResult} from 'next-mdx-remote'
import {readFile} from "fs/promises";
import {useEffect, useState} from "react";
import {LinearProgress} from "@mui/material";
import {Future} from "@/future";
import MDXProvider from "@/components/MDXProvider";
import Travel from "@/components/Travel";
import Main from "@/components/Main";
import mdxSerialize from "@/mdxSerialize";

export default function ClientMDX({file}: { file: string }) {
    const [source, setSource] = useState<Future<MDXRemoteSerializeResult>>()
    useEffect(() => {
        mdxSerialize(file).then(setSource)
    }, [file])
    return (
        <Main>
            {source ?
                <Travel future={source} component={MDXProvider} field="source"/> :
                <LinearProgress/>}
        </Main>
    )
}

export async function getStaticProps() {
    return {props: {file: await readFile('src/pages/index.mdx', {encoding: 'utf8'})}}
}
