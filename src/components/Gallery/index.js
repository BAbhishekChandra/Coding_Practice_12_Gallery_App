import {Component} from 'react'

import ThumbnailItem from '../ThumbnailItem'
import './index.css'

const imagesList = [
  {
    id: 0,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-pond-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-pond-thumbnail-img.png',
    imageAltText: 'nature mountain with pond',
    thumbnailAltText: 'nature mountain with pond thumbnail',
  },
  {
    id: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/nature-sunset-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-sunset-thumbnail-img.png',
    imageAltText: 'nature sunset',
    thumbnailAltText: 'nature sunset thumbnail',
  },
  {
    id: 2,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-ocean-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-ocean-thumbnail-img.png',
    imageAltText: 'nature mountain with ocean',
    thumbnailAltText: 'nature mountain with ocean thumbnail',
  },
  {
    id: 3,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-forest-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-forest-thumbnail-img.png',
    imageAltText: 'nature mountain with forest',
    thumbnailAltText: 'nature mountain with forest thumbnail',
  },
  {
    id: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/nature-leaves-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-leaves-thumbnail-img.png',
    imageAltText: 'nature leaves',
    thumbnailAltText: 'nature leaves thumbnail',
  },
  {
    id: 5,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/nature-tree-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-tree-thumbnail-img.png',
    imageAltText: 'nature tree',
    thumbnailAltText: 'nature tree thumbnail',
  },
  {
    id: 6,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-waterfall-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-waterfall-thumbnail-img.png',
    imageAltText: 'nature waterfall',
    thumbnailAltText: 'nature waterfall thumbnail',
  },
  {
    id: 7,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/nature-river-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-river-thumbnail-img.png',
    imageAltText: 'nature river',
    thumbnailAltText: 'nature river thumbnail',
  },
]

// Write your code here.

class Gallery extends Component {
  state = {
    activeImageUrl: imagesList[0].imageUrl,
    activeImageAltText: imagesList[0].imageAltText,
    activeThumbNail: imagesList[0].id,
  }

  onClickThumbNailContainer = id => {
    console.log(id)
    const tempImageItem = imagesList[id]
    this.setState({activeImageUrl: tempImageItem.imageUrl})
    this.setState({activeImageAltText: tempImageItem.imageAltText})
    this.setState({activeThumbNail: tempImageItem.id})
  }

  render() {
    const {activeImageUrl, activeImageAltText, activeThumbNail} = this.state
    // console.log(imagesList)
    // console.log(activeImageUrl)
    // console.log(activeImageAltText)

    return (
      <div className="app-container">
        <div className="gallery-container">
          <img
            className="image-container"
            src={activeImageUrl}
            alt={activeImageAltText}
          />
          <h1 className="gallery-heading">Nature Photography</h1>
          <p className="gallery-description">Nature Photography by Rahul</p>
          <ul className="thumb-nail-container">
            {imagesList.map(eachImage => (
              <ThumbnailItem
                key={eachImage.id}
                imageDetails={eachImage}
                onClickThumbNailContainer={this.onClickThumbNailContainer}
                isActive={activeThumbNail === eachImage.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Gallery
