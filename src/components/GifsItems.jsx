

export const GifsItems = ({ title, images }) => {

  return (
    <div>

        <img src={images.downsized_medium.url} alt={title} />


    </div>
  )
}
