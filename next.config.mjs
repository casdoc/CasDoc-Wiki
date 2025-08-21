import nextra from 'nextra'
 
// Set up Nextra with its configuration
const withNextra = nextra({
  // ... Add Nextra-specific options here
    // contentDirBasePath: "[[...mdxPath]]/page.jsx"
})
 
// Export the final Next.js config with Nextra included
export default withNextra({
    turbopack: {
        resolveAlias: {
            // Path to your `mdx-components` file with extension
            'next-mdx-import-source-file': './src/mdx-components.js'
        }
    }
})