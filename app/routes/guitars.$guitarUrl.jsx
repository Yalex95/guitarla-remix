import { useLoaderData } from "@remix-run/react"
import { getGuitar } from "~/models/guitars.server"
import styles from '~/styles/guitars.css'

export function meta({data}){
return[
  {title: `GuitarLA - ${data.data[0].attributes.name}`}
]
}

export function links(){
  return[{
    rel: 'stylesheet',
    href: styles
  }
  ]
}
export async function loader({ params}){
 const {guitarUrl} = params
 const guitar = await getGuitar(guitarUrl)
 return guitar
}
function Guitar(){
  const guitar = useLoaderData()
const {name,image, price,description} = guitar.data[0].attributes
  return (
    <main className="guitarra contenedor">
      <img className="imagen" src={image.data.attributes.url} alt={`image guitar ${name}`} />
      <div className="contenido">
        <h3>{name}</h3>
        <p className="texto">{description}</p>
        <p className="precio">${price}</p>
      </div>
    </main>
  )
}

export default Guitar