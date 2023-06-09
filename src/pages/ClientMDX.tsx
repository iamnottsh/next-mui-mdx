import {MDXRemoteSerializeResult} from 'next-mdx-remote'
import {readFile} from "fs/promises";
import {useEffect, useState} from "react";
import {LinearProgress} from "@mui/material";
import {Future} from "@/future";
import MarkProvider from "@/components/MarkProvider";
import Travel from "@/components/Travel";
import Main from "@/components/Main";
import serializeMDX from "@/serializeMDX";

export default function ClientMDX({file}: { file: string }) {
    const [source, setSource] = useState<Future<MDXRemoteSerializeResult>>()
    useEffect(() => {
        serializeMDX(file).then(setSource)
    }, [file])
    return (
        <Main>
            {source ?
                <Travel future={source} component={MarkProvider} field="source"/> :
                <LinearProgress/>}
        </Main>
    )
}

export async function getStaticProps() {
    return {props: {file: await readFile('src/pages/index.mdx', {encoding: 'utf8'})}}
}
