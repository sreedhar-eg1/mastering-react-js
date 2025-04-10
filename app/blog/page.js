import Link from "next/link";

export default function BlogPage() {
    return <main>
        <h2>Blog page</h2>
        <p><Link href="blog/post-1">Blog post 1</Link></p>
        <p><Link href="blog/post-2">Blog post 2</Link></p>
    </main>
}