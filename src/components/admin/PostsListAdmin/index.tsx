import { findAllPostFromApiAdmin } from "@/lib/post/queries/admin";
import clsx from "clsx";
import Link from "next/link";
import { DeletePostButton } from "../DeletePostButton";
import ErrorMessage from "../../ErrorMessage";

export default async function PostListAdmin() {
  const postsResponse = await findAllPostFromApiAdmin();

  if (!postsResponse.success) {
    console.log(postsResponse.errors);

    return (
      <ErrorMessage
        contentTitle="Ei 😅"
        content="Tente fazer login novamente"
      />
    );
  }

  const posts = postsResponse.data;
  if (posts.length <= 0) {
    return (
      <ErrorMessage contentTitle="Ei 😅" content="Bora criar algum post??" />
    );
  }

  return (
    <div className="mb-16">
      {posts.map((post) => {
        return (
          <div
            key={post.id}
            className={clsx(
              "py-2 px-2",
              !post.published && "bg-slate-300",
              "flex items-center justify-between gap-2",
            )}
          >
            <Link href={`/admin/post/${post.id}`}>{post.title}</Link>

            {!post.published && (
              <span className="text-xs text-slate-600 italic">
                (Não publicado)
              </span>
            )}

            <DeletePostButton id={post.id} title={post.title} />
          </div>
        );
      })}
    </div>
  );
}
