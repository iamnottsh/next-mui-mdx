import {MDXRemote, MDXRemoteSerializeResult} from "next-mdx-remote";
import mdxComponents from "@/mdxComponents";
import MDXWrapper from "@/components/MDXWrapper";

export default function MDXRemoteProvider({source}: { source: MDXRemoteSerializeResult }) {
    return <MDXRemote {...source} components={{...mdxComponents, wrapper: MDXWrapper}}/>
}
