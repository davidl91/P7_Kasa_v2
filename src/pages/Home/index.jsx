import React, {useState, useEffect} from "react"
import uuid from "react-uuid"
import "./home.css"
import Banner from "../../components/Banner/banner"
import Card from "../../components/Card/card"
import bannerhome from "./images/banner-home.png"

function Home() {
  const [datas, setDatas] = useState([])

  useEffect(() => {
    fetch("./logements.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setDatas(data)
      })
  }, [])

  return (
    <>
      <Banner banner={bannerhome} title="Chez vous, partout et ailleurs" />
      <section className="cards">
        {datas.map((data) => {
          return <Card key={uuid()} data={data} />
        })}
      </section>
    </>
  )
}

export default Home
