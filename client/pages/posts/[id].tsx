import Link from 'next/link'
import { useRouter } from 'next/router'
import { serverURL } from '@/utils/serverURL'

export default function Post({ post }: any) {
  const router = useRouter()
  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <>
      <Link className='link' href='/'>
        Back to Home
      </Link>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </>
  )
}

// * Generate paths from /api/posts
export async function getStaticPaths() {
  const res = await fetch(`${serverURL}/api/posts`)
  const posts = await res.json()

  const paths = posts.map((post: any) => ({
    params: { id: post._id },
  }))

  return { paths, fallback: true }
}

// * GET a single post from the server /api/posts/:id
export async function getStaticProps({ params }: any) {
  const res = await fetch(`${serverURL}/api/posts/${params.id}`)
  const post = await res.json()

  return { props: { post } }
}

// TIP: You can also use getServerSideProps, SWR, useEffect. With those you don't need to generate paths
