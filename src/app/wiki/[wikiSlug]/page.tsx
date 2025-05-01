import { promises as fs } from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";

export default async function WikiPage({
    params,
}: {
    params: { wikiSlug: string };
}) {
    const content = await fs.readFile(
        path.join(process.cwd(), "src/markdown", `${params.wikiSlug}.mdx`),
        "utf-8"
    );
    console.log("content", content);
    const data = await compileMDX<{ title: string }>({
        source: content,
        options: {
            parseFrontmatter: true,
            mdxOptions: {
                remarkPlugins: [],
                rehypePlugins: [],
            },
        },
    });

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 py-10">
            <h1 className="text-3xl font-bold mb-4">
                {data.frontmatter.title}
            </h1>
            <article className="prose prose-blue max-w-3xl w-full">
                {data.content}
            </article>
        </div>
    );
}
