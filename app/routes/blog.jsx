import { useLoaderData } from "@remix-run/react"
import Post from "~/components/post"
import { getPosts } from "~/models/posts.server"
import style from '~/styles/posts.css'


export function meta(){
  return[
    {title:'GuitarLA - Guitar Blog'},
    {description: 'GuitarLA - Our guitar blog'}
  ]
}

export function links(){
  return[
    {
      rel: 'stylesheet',
      href: style
    }
  ]
}

export async function loader(){
const posts = await getPosts()
return posts.data
}

const Blog = () => {
  const posts = useLoaderData()

  return (
    <main className="contenedor">
      <h2 className="heading">Blog</h2>
      <div className="blog">
        {
          posts.map(post=>(
            <Post 
            key={post?.id} 
            post={post?.attributes}
            />
          ))
        }
      </div>
    </main>
  )
}

export default Blog