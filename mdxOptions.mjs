import remarkFrontmatter from "remark-frontmatter";
import remarkFootnotes from "remark-footnotes";
import remarkGfm from "remark-gfm";
import remarkSupersub from "remark-supersub";
import remarkToc from "remark-toc";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import {visit} from "unist-util-visit";

/**
 * @type {import("@mdx-js/loader/lib").CompileOptions}
 */
export default {
    remarkPlugins: [
        () => tree => {
            visit(tree, {type: 'mdxJsxFlowElement', name: 'iframe'}, node => {
                node.attributes?.push({type: 'mdxJsxAttribute', name: 'sandbox', value: 'allow-scripts'})
            })
            return tree
        },
        [remarkFrontmatter, ['yaml', 'toml']],
        [remarkFootnotes, {inlineNotes: true}],
        [remarkGfm, {singleTilde: false}],
        remarkSupersub,
        [remarkToc, {heading: '目录'}],
        remarkMath,
    ],
    remarkRehypeOptions: {clobberPrefix: '', footnoteLabel: '脚注', footnoteBackLabel: '回到正文'},
    rehypePlugins: [
        rehypeKatex,
        rehypeSlug,
        [rehypeAutolinkHeadings, {content: {type: 'text', value: '¶'}}],
        [rehypeHighlight, {ignoreMissing: true}],
    ],
    providerImportSource: "@mdx-js/react",
    development: process.env.NODE_ENV === 'development',
}
