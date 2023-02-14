import React from "react"
import "./banner.css"

function Banner(props) {
  return (
    <div className="banner">
      <img
        className="banner__image"
        src={props.banner}
        alt="Arrière-plan de la bannière"
      />
      <h1 className="banner__text">{props.title}</h1>
    </div>
  )
}

export default Banner
