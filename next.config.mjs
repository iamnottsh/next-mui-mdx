import nextMDX from "@next/mdx";
import mdxOptions from "./mdxOptions.mjs";

const withMDX = nextMDX({
    extension: /\.mdx?$/,
    options: mdxOptions,
})

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
    reactStrictMode: true,
}

export default withMDX(nextConfig)
