import { useState } from "react"
import { gifsApi } from "../api/gifsApi"


export const useGifs = () => {


    const [gifs, setGifs] = useState([])
    const [loading, setLoading] = useState(false)


    const loadGifs = async (search) => {

        try {
            
            setLoading(true)
            
            const { data } = await gifsApi.get(`${search}&limit=20&offset=0&rating=g&lang=en`)
            
            setLoading(false)

            setGifs(data.data)
            
        } catch (error) {

            setLoading(false)
            console.log(error)
        }
    }



    return {

        // Atributos
        gifs,
        loading,

        // Métodos
        loadGifs


    }
}