import React, {useState} from "react"
import uuid from "react-uuid"
import arrow from "./images/arrow.svg"
import "./collapse.css"

function Collapse(props) {
  const [openstate, setOpenstate] = useState(false)

  const handleClick = function (e) {
    e.preventDefault()
    setOpenstate(!openstate)
  }

  return (
    <div className="collapse">
      <button className="collapse__button" onClick={handleClick} type="button">
        <h2 className="collapse__title">{props.title}</h2>
        <img
          className={`collapse__arrow ${openstate}`}
          src={arrow}
          alt="Icone de la fléche"
        />
      </button>
      {openstate && (
        <div className="collapse__description">
          {Array.isArray(props.description) ? (
            <ul>
              {props.description.map((element) => {
                return <li key={uuid()}>{element}</li>
              })}
            </ul>
          ) : (
            <p>{props.description}</p>
          )}
        </div>
      )}
    </div>
  )
}

export default Collapse
