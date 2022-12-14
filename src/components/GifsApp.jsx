import { useState } from "react"
import { GifsSearch, SearchComponents } from "./"


export const GifsApp = () => {

    const [search, setsearch] = useState("amor")


  return (
    <div className="flex flex-col gap-6 items-center justify-center py-10 lg:py-16 lg:gap-10">

        <div>

            <SearchComponents setSearch={setsearch} />

        </div>
 
        <GifsSearch search={search} />

    </div>
  )
}
