import { useLoaderData } from "@remix-run/react"
import Guitar from "~/components/guitar"
import { getGuitars } from "~/models/guitars.server"

export async function loader(){
  const guitars = await getGuitars()
  return guitars.data
}

function Store(){
  const guitars = useLoaderData()
  return (
    <main className="contenedor">
      <h2 className="heading">Our colection</h2>
      {guitars?.length && (
        <div className="guitarras-grid">
          {guitars.map(guitar=>(
            <Guitar 
            key={guitar?.id} 
            guitar={guitar?.attributes}
            />
          ))}
        </div>
      )}
    </main>
  )
}

export default Store