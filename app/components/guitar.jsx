import { Link } from "@remix-run/react"

function Guitar({guitar}){
    const {name,image, price,url,description} = guitar
  return (
    <div className="guitarra">
      <img src={image.data.attributes.formats.medium.url} alt={`Image guitar - ${name}`} />
      <div className="contenido">
        <h3>{name}</h3>
        <p className="descripcion">{description}</p>
        <p className="precio">${price}</p>
        <Link className="enlace" to={`/guitars/${url}`}>Show product</Link>
      </div>
    </div>
  )
}

export default Guitar