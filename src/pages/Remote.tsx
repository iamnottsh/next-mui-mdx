import {serialize} from 'next-mdx-remote/serialize'
import {MDXRemoteSerializeResult} from 'next-mdx-remote'
import mdxOptions from "../../mdxOptions.mjs";
import {readFile} from "fs/promises";
import future, {Future} from "@/future";
import Travel from "@/components/Travel";
import MDXRemoteProvider from "@/components/MDXRemoteProvider";
import Main from "@/components/Main";

export default function Remote({source}: { source: Future<MDXRemoteSerializeResult> }) {
    return (
        <Main>
            <Travel future={source} component={MDXRemoteProvider} field="source"/>
        </Main>
    )
}

export async function getStaticProps() {
    const mdxSource = serialize(await readFile('src/pages/index.mdx', {encoding: 'utf8'}), {mdxOptions})
    return {props: {source: await future(mdxSource)}}
}
