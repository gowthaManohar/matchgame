import './index.css'

const Thumbnail = props => {
  const {thumb, onIconClick} = props
  const {thumbnailUrl, id} = thumb

  const iconClick = () => {
    onIconClick(id)
  }

  return (
    <li onClick={iconClick} className="thumb-item">
      <button type="button" className="thumbnail-button">
        <img className="thumbnail-img" src={thumbnailUrl} alt="thumbnail" />
      </button>
    </li>
  )
}

export default Thumbnail
