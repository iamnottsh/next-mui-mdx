import future from "@/future";
import {serialize} from "next-mdx-remote/serialize";
import markOptions from "../markOptions.mjs";

export default function serializeMD(file: string) {
    return future(serialize(file, {mdxOptions: {...markOptions, format: 'md'}}))
}
