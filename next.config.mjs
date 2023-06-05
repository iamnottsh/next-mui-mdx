import nextMDX from "@next/mdx";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";
import remarkToc from "remark-toc";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";

const withMDX = nextMDX({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [
            [remarkFrontmatter, ['yaml', 'toml']],
            [remarkGfm, {singleTilde: false}],
            [remarkToc, {heading: '目录'}],
            remarkMath,
        ],
        remarkRehypeOptions: {footnoteLabel: '脚注', footnoteBackLabel: '回到正文'},
        rehypePlugins: [
            rehypeKatex,
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
