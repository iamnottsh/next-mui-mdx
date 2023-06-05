import {MDXRemote, MDXRemoteSerializeResult} from "next-mdx-remote";
import {components} from "@/pages/_app";

export default function MDXRemoteProvider({source}: { source: MDXRemoteSerializeResult }) {
    return <MDXRemote {...source} components={components}/>
}
