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
        <div className="flex flex-col items-center justify-center min-h-screen bg-neutral-50 text-zinc-900 px-4 py-10">
            <h1 className="text-3xl font-bold mb-4">
                {data.frontmatter.title}
            </h1>
            <article className="prose max-w-3xl w-full">{data.content}</article>
            {/* <article className="prose prose-xl">
                <h1>This is Title</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Impedit obcaecati temporibus delectus et eaque non enim,
                    consequatur illum velit sapiente molestiae soluta
                    voluptatibus omnis quasi dolores maxime officiis at vero!
                </p>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Aut dignissimos quasi pariatur nobis ipsa ullam! Commodi
                    modi, saepe eveniet soluta numquam quasi ducimus, corrupti
                    architecto distinctio dignissimos alias nesciunt doloribus?
                </p>
            </article> */}
        </div>
    );
}
