import { useEffect } from "react"
import { useGifs } from "../hooks/useGifs"
import { GifsItems } from "./"

export const GifsSearch = ({ search }) => {

  const { gifs, loadGifs, loading } = useGifs()

  useEffect(() => {
    loadGifs(search)
  }, [search])

  if(loading) {
    return <div>Loading ...</div>
  }

  return (
    <div className="columns-1 lg:columns-5 space-x-2 space-y-4 container mx-auto">

      {
        gifs.length > 0 ?
          gifs.map((gif) => (

            <GifsItems key={gif.id} {...gif} />

          ))

        : <p>No hay datos de su busqueda</p>

      }


    </div>
  )
}

