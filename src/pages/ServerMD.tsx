import {MDXRemoteSerializeResult} from 'next-mdx-remote'
import {readFile} from "fs/promises";
import {Future} from "@/future";
import Travel from "@/components/Travel";
import MarkProvider from "@/components/MarkProvider";
import Main from "@/components/Main";
import serializeMD from "@/serializeMD";

export default function ServerMD({source}: { source: Future<MDXRemoteSerializeResult> }) {
    return (
        <Main>
            <Travel future={source} component={MarkProvider} field="source"/>
        </Main>
    )
}

export async function getStaticProps() {
    return {props: {source: await serializeMD(await readFile('src/pages/index.mdx', {encoding: 'utf8'}))}}
}
