import {serialize} from 'next-mdx-remote/serialize'
import {MDXRemote, MDXRemoteSerializeResult} from 'next-mdx-remote'
import {readFile} from "fs/promises";
import {components} from "@/pages/_app";
import {useEffect, useState} from "react";
import {LinearProgress} from "@mui/material";
import mdxOptions from "../../mdxOptions.mjs";

export default function Local({file}: { file: string }) {
    const [source, setSource] = useState<MDXRemoteSerializeResult>()
    useEffect(() => {
        serialize(file, {mdxOptions}).then(setSource)
    }, [file])
    return source ? <MDXRemote {...source} components={components}/> : <LinearProgress/>
}

export async function getStaticProps() {
    const mdxFile = await readFile('src/pages/index.mdx', {encoding: 'utf8'})
    return {props: {file: mdxFile}}
}
