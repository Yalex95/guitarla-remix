import { Response } from "@remix-run/node"
import { isRouteErrorResponse, useLoaderData, useRouteError } from "@remix-run/react"
import { getGuitar } from "~/models/guitars.server"
import styles from '~/styles/guitars.css'


export async function loader({ params}){
  const {guitarUrl} = params
  const guitar = await getGuitar(guitarUrl)
  if(guitar.data.length === 0){
   throw new Response('',{
     status: 404,
     statusText: 'Guitar not found',
     data:[]
   })
  }
  return guitar
 }

export function meta({data}){
  // it dont works because is not returning nothing
  // if (!data || !data.data || data.data.length === 0) {
  //   return [
  //     {
  //       title: "GuitarLA - Guitarra no encontrada",
  //     },
  //   ];
  // }
return[
  {title: `GuitarLA - ${data.data[0].attributes.name}`},
  {description: `Guitarras, guitar shop, guitar ${data.data[0].attributes.name}`}
]
}

export function links(){
  return[{
    rel: 'stylesheet',
    href: styles
  }
  ]
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