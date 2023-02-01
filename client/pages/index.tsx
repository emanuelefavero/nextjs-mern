import { serverURL } from '@/utils/serverURL'

export default function Home({ posts }: any) {
  return (
    <>
      <h1>Posts</h1>
      {posts.map((post: any) => (
        <div key={post._id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </>
  )
}

// GET all posts from the server /api/posts
export async function getStaticProps() {
  const res = await fetch(`${serverURL}/api/posts`)
  const posts = await res.json()
  return {
    props: {
      posts,
    },
  }
}
