import React from "react"
import "./profil.css"

function Profil(props) {
  return (
    <div className="profil">
      <p className="profil__name">{props.name}</p>
      <img
        className="profil__image"
        src={props.photo}
        alt="Profil utilisateur"
      />
    </div>
  )
}

export default Profil
