"use client";

import { usePost } from "@/queries/postQueries";
import { useRouter } from "next/router";

export default function PostPage() {
  const router = useRouter();
  const { id } = router.query;
  const { data: post, isLoading } = usePost(id as string);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>Post ID: {post.id}</p>
    </div>
  );
}
