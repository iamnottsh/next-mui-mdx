import {MDXRemote, MDXRemoteSerializeResult} from "next-mdx-remote";
import markComponents from "@/markComponents";
import MarkWrapper from "@/components/MarkWrapper";

export default function MarkProvider({source}: { source: MDXRemoteSerializeResult }) {
    return <MDXRemote {...source} components={{...markComponents, wrapper: MarkWrapper}}/>
}
