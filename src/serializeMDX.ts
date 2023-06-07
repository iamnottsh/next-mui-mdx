import future from "@/future";
import {serialize} from "next-mdx-remote/serialize";
import markOptions from "../markOptions.mjs";

export default function serializeMDX(file: string) {
    return future(serialize(file, {mdxOptions: markOptions}))
}
