import React from "react"
import {Link} from "react-router-dom"
import "./card.css"

function Card(props) {
  return (
    <Link to={`/location/${props.data.id}`}>
      <article className="card">
        <img
          className="card__image"
          src={props.data.cover}
          alt={`Illustration du logement ${props.data.title}`}
        />
        <div className="card__background"></div>
        <h2 className="card__text">{props.data.title}</h2>
      </article>
    </Link>
  )
}

export default Card
