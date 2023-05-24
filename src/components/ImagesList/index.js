import './index.css'

const ImagesList = props => {
  const {eachItem, getImageId} = props
  const {id, thumbnailUrl} = eachItem

  const onClickImage = () => {
    getImageId(id)
  }

  return (
    <li>
      <button type="button" className="thumbnail-btn" onClick={onClickImage}>
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-img" />
      </button>
    </li>
  )
}
export default ImagesList
