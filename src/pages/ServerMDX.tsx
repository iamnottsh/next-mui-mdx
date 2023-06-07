import {MDXRemoteSerializeResult} from 'next-mdx-remote'
import {readFile} from "fs/promises";
import future, {Future} from "@/future";
import Travel from "@/components/Travel";
import MDXProvider from "@/components/MDXProvider";
import Main from "@/components/Main";
import mdxSerialize from "@/mdxSerialize";

export default function ServerMDX({source}: { source: Future<MDXRemoteSerializeResult> }) {
    return (
        <Main>
            <Travel future={source} component={MDXProvider} field="source"/>
        </Main>
    )
}

export async function getStaticProps() {
    const mdxSource = mdxSerialize(await readFile('src/pages/index.mdx', {encoding: 'utf8'}))
    return {props: {source: await future(mdxSource)}}
}
