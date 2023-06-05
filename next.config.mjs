import nextMDX from "@next/mdx";
import remarkFrontmatter from "remark-frontmatter";
import remarkFootnotes from "remark-footnotes";
import remarkGfm from "remark-gfm";
import remarkSupersub from "remark-supersub";
import remarkToc from "remark-toc";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeMermaid from "rehype-mermaidjs";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";

const withMDX = nextMDX({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [
            [remarkFrontmatter, ['yaml', 'toml']],
            [remarkFootnotes, {inlineNotes: true}],
            [remarkGfm, {singleTilde: false}],
            remarkSupersub,
            [remarkToc, {heading: '目录'}],
            remarkMath,
        ],
        remarkRehypeOptions: {footnoteLabel: '脚注', footnoteBackLabel: '回到正文'},
        rehypePlugins: [
            rehypeKatex,
            rehypeMermaid,
            rehypeSlug,
            [rehypeAutolinkHeadings, {content: {type: 'text', value: '¶'}}],
            [rehypeHighlight, {ignoreMissing: true}],
        ],
        providerImportSource: "@mdx-js/react",
    },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
    reactStrictMode: true,
}

export default withMDX(nextConfig)
