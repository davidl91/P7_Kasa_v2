import React, {useState} from "react"
import "./gallery.css"
import arrowback from "./images/arrow-back.svg"
import arrowforward from "./images/arrow-forward.svg"

function Gallery(props) {
  const [pictureIndex, setPictureIndex] = useState(0)

  const imgback = () => {
    if (pictureIndex === 0) {
      return setPictureIndex(props.pictures.length - 1)
    }
    return setPictureIndex(pictureIndex - 1)
  }

  const imgforward = () => {
    if (pictureIndex === props.pictures.length - 1) {
      return setPictureIndex(0)
    }
    return setPictureIndex(pictureIndex + 1)
  }

  return (
    <div className="gallery">
      {props.pictures.length > 1 && (
        <img
          className="gallery__back"
          src={arrowback}
          alt="Fléche précedént"
          onClick={imgback}
        />
      )}
      <img
        className="gallery__image"
        src={props.pictures[pictureIndex]}
        alt="Illustration du logement"
      />
      {props.pictures.length > 1 && (
        <span className="gallery__index">
          {pictureIndex + 1}/{props.pictures.length}
        </span>
      )}
      {props.pictures.length > 1 && (
        <img
          className="gallery__forward"
          src={arrowforward}
          alt="Fléche suivant"
          onClick={imgforward}
        />
      )}
    </div>
  )
}

export default Gallery
