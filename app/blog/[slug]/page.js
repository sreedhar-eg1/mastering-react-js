export default function BlogPostPage({params}) {
    return <main>
        <h2>Blog post page</h2>
        {/* to access the dynamic route using params */}
        {/* need to use the dynamic folder name to get the dynamic value, here it is slug */}
        <p>{params.slug}</p>
    </main>
}