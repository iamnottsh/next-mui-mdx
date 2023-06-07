import nextMDX from "@next/mdx";
import markOptions from "./markOptions.mjs";

const withMDX = nextMDX({
    extension: /\.mdx?$/,
    options: markOptions,
})

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
    reactStrictMode: true,
}

// noinspection JSUnusedGlobalSymbols
export default withMDX(nextConfig)
