import {serialize} from 'next-mdx-remote/serialize'
import {MDXRemote, MDXRemoteSerializeResult} from 'next-mdx-remote'
import mdxOptions from "../../mdxOptions.mjs";
import {readFile} from "fs/promises";
import {components} from "@/pages/_app";

export default function Remote({source}: { source: MDXRemoteSerializeResult }) {
    return <MDXRemote {...source} components={components}/>
}

export async function getStaticProps() {
    const mdxSource = await serialize(await readFile('src/pages/index.mdx', {encoding: 'utf8'}), {mdxOptions})
    return {props: {source: mdxSource}}
}
