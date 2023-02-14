import React, {useState, useEffect} from "react"
import {useParams, Navigate} from "react-router-dom"
import "./location.css"
import Gallery from "../../components/Gallery/gallery"
import Tags from "../../components/Tags/tags"
import Profil from "../../components/Profil/profil"
import Notation from "../../components/Notation/notation"
import Collapse from "../../components/Collaspe/collapse"

function Location() {
  const {id} = useParams()
  const [datas, setDatas] = useState({
    pictures: [],
    tags: [],
    host: {},
  })

  useEffect(() => {
    fetch("../logements.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        const location = data.find((data) => data.id === id)
        setDatas(location)
      })
  }, [id])

  return datas === undefined ? (
    <Navigate replace to="/Error404" />
  ) : (
    <>
      <Gallery pictures={datas.pictures} />
      <section className="location">
        <div className="location__text">
          <h1 className="location__title">{datas.title}</h1>
          <p className="location__paragraph">{datas.location}</p>
          <Tags tags={datas.tags} />
        </div>
        <div className="location__info">
          <Profil name={datas.host.name} photo={datas.host.picture} />
          <Notation note={datas.rating} />
        </div>
      </section>
      <section className="toggles">
        <Collapse title="Description" description={datas.description} />
        <Collapse title="Équipements" description={datas.equipments} />
      </section>
    </>
  )
}

export default Location
