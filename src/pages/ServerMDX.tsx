import {MDXRemoteSerializeResult} from 'next-mdx-remote'
import {readFile} from "fs/promises";
import {Future} from "@/future";
import Travel from "@/components/Travel";
import MarkProvider from "@/components/MarkProvider";
import Main from "@/components/Main";
import serializeMDX from "@/serializeMDX";

export default function ServerMDX({source}: { source: Future<MDXRemoteSerializeResult> }) {
    return (
        <Main>
            <Travel future={source} component={MarkProvider} field="source"/>
        </Main>
    )
}

export async function getStaticProps() {
    return {props: {source: await serializeMDX(await readFile('src/pages/index.mdx', {encoding: 'utf8'}))}}
}
