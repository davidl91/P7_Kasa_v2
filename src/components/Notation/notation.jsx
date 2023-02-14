import React from "react"
import uuid from "react-uuid"
import starfull from "./images/star-full.svg"
import starempty from "./images/star-empty.svg"

function Notation(props) {
  const stars = [1, 2, 3, 4, 5]

  return (
    <div className="notation">
      {stars.map((star) => {
        return (
          <img
            key={uuid()}
            className="notation__star"
            src={props.note >= star ? starfull : starempty}
            alt="Icone d'étoile"
          />
        )
      })}
    </div>
  )
}

export default Notation
