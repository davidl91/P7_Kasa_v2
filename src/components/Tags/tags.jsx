import React from "react"
import uuid from "react-uuid"
import "./tags.css"

function Tags(props) {
  return (
    <div className="location__tags">
      {props.tags.map((tag) => {
        return (
          <span key={uuid()} className="tag">
            {tag}
          </span>
        )
      })}
    </div>
  )
}

export default Tags
