// Write your code here.

import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, onClickThumbNailContainer, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = imageDetails
  // console.log(id)
  const isActiveThumbNailClassName = isActive
    ? 'thumbnail-image-with-opacity thumbnail-image-without-opacity'
    : 'thumbnail-image-with-opacity'

  const onClickThumbnailItem = () => {
    onClickThumbNailContainer(id)
  }

  return (
    <li className="thumbnail-element-container">
      <button
        type="button"
        className="thumbnail-button"
        onClick={onClickThumbnailItem}
      >
        <img
          className={isActiveThumbNailClassName}
          src={thumbnailUrl}
          alt={thumbnailAltText}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
