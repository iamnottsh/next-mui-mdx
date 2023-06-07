import future from "@/future";
import {serialize} from "next-mdx-remote/serialize";
import mdxOptions from "../mdxOptions.mjs";

export default function mdxSerialize(file: string) {
    return future(serialize(file, {mdxOptions}))
}
