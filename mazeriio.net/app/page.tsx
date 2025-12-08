import { fetchPages } from "@/lib/notion";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {

  const posts = await fetchPages();

  return (
    <main>
      {posts.results.map((post: any) => {
        return (
          <article key={post.id}>
            <Link href={`/blog/${post.properties.slug.rich_text[0].plain_text}`}>{post.properties.Title.title[0].plain_text}</Link>
          </article>
        )
      })}
    </main>
  );
}
