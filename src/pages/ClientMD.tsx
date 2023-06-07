import {MDXRemoteSerializeResult} from 'next-mdx-remote'
import {readFile} from "fs/promises";
import {useEffect, useState} from "react";
import {LinearProgress} from "@mui/material";
import {Future} from "@/future";
import MarkProvider from "@/components/MarkProvider";
import Travel from "@/components/Travel";
import Main from "@/components/Main";
import serializeMD from "@/serializeMD";

export default function ClientMD({file}: { file: string }) {
    const [source, setSource] = useState<Future<MDXRemoteSerializeResult>>()
    useEffect(() => {
        serializeMD(file).then(setSource)
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
