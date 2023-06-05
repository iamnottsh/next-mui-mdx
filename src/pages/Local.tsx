import {serialize} from 'next-mdx-remote/serialize'
import {MDXRemoteSerializeResult} from 'next-mdx-remote'
import {readFile} from "fs/promises";
import {useEffect, useState} from "react";
import {LinearProgress} from "@mui/material";
import mdxOptions from "../../mdxOptions.mjs";
import future, {Future} from "@/future";
import MDXRemoteProvider from "@/components/MDXRemoteProvider";
import Travel from "@/components/Travel";
import Main from "@/components/Main";

export default function Local({file}: { file: string }) {
    const [source, setSource] = useState<Future<MDXRemoteSerializeResult>>()
    useEffect(() => {
        future(serialize(file, {mdxOptions})).then(setSource)
    }, [file])
    return (
        <Main>
            {source ?
                <Travel future={source} component={MDXRemoteProvider} field="source"/> :
                <LinearProgress/>}
        </Main>
    )
}

export async function getStaticProps() {
    const mdxFile = await readFile('src/pages/index.mdx', {encoding: 'utf8'})
    return {props: {file: mdxFile}}
}
