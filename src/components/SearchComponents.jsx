
export const SearchComponents = ({ setSearch }) => {


    const onSubmit = (e) => {
        e.preventDefault()
    }

    const onInputChange = (e) => {

        if(e.key === "Enter") {
            setSearch(e.target.value.trim())
        }
    }

  return (
    <form  onSubmit={onSubmit}>

        <input 
            className="px-4 py-2 lg:px-6 lg:py-3 rounded-md w-72 lg:w-96 border-gray-400 border"
            type="text"  
            placeholder="Buscar Gifs ..."
            onKeyDown={onInputChange}
        />

    </form>
  )
}
