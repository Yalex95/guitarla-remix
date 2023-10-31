import { Link } from "@remix-run/react"
import { formatDate } from "~/utils/helpers"

function Post ({post}) {
    const {title, content, image, url,publishedAt} = post
  return (
    <div className="post">
        <img src={image.data.attributes.formats.medium.url} alt={`${title} Image`} />
        <div className="post-container">
            <h3>{title}</h3>
            <p className="fecha">{formatDate(publishedAt)}</p>
            <p className="contenido">{content}</p>
            <Link className="learn-more" to={`/posts/${url}`}>Learn More</Link>
        </div>
    </div>
  )
}

export default Post