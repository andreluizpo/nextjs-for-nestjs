import { findPublicPostBySlugCached } from "@/lib/post/queries/public";
import Image from "next/image";
import { PostHeading } from "../PostHeading";
import { PostDate } from "../PostDate";
import { SafeMarkdown } from "../SafeMarkedown";

type SinglePostProps = {
    slug: string;
};

export async function SinglePost({ slug }: SinglePostProps) {
    const post = await findPublicPostBySlugCached(slug);

    return (
        <article className="mb-16">
            <header className="group flex flex-col gap-4 mb-4">
                <Image
                    className="rounded-xl"
                    src={post.coverImageUrl}
                    alt={post.title}
                    width={1200}
                    height={720}
                />

                <PostHeading url={`/post/${post.slug}`}>
                    {post.title}
                </PostHeading>

                <p>
                    {post.author} | <PostDate dateTime={post.createdAt} />
                </p>
            </header>

            <p className="mb-4 text-xl text-slate-600">{post.excerpt}</p>

            <SafeMarkdown markdown={post.content}></SafeMarkdown>
        </article>
    );
}
