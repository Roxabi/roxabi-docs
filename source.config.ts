import { remarkMdxMermaid } from 'fumadocs-core/mdx-plugins'
import { createRehypeCode } from 'fumadocs-core/mdx-plugins/rehype-code.core'
import { defineConfig, defineDocs } from 'fumadocs-mdx/config'
import { shikiFactory } from './lib/shiki'

export const docs = defineDocs({
  dir: 'content/docs',
})

const rehypeCode = createRehypeCode(shikiFactory)

export default defineConfig({
  mdxOptions: {
    remarkPlugins: [remarkMdxMermaid],
    rehypeCodeOptions: false,
    rehypePlugins: [
      [rehypeCode, { themes: { light: 'github-light', dark: 'github-dark' } }],
    ],
  },
})
