import { Link, useLoaderData } from "@remix-run/react";
import { getPost } from "~/models/posts.server";

export async function loader({ params }) {
  const { postUrl } = params;
  const post = await getPost(postUrl);
  if (post.data.length === 0) {
    throw new Response("", {
      status: 404,
      statusText: "Post not found",
      data: [],
    });
  }
  return post;
}
export function meta({data}){
  return[
    {title: `GuitarLA - ${data.data[0].attributes.title}`},
    {description: `Guitarras, guitar shop, guitar ${data.data[0].attributes.title}`}
  ]
  }
function Post() {
  const post = useLoaderData();
  const { title, content, image, url } = post.data[0].attributes;
  return (
    <main className="post contenedor">
      <h1>{title}</h1>
      <img
        src={image.data.attributes.formats.medium.url}
        alt={`${title} Image`}
      />
      <div className="post-container">
        <p className="contenido">{content}</p>
      </div>
    </main>
  );
}
export default Post;
