import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import React from "react"
import Home from "./pages/Home"
import About from "./pages/About"
import Location from "./pages/Location"
import Error from "./pages/Error"
import Header from "./components/Header/header"
import Footer from "./components/Footer/footer"

function App() {
  return (
    <>
      <Router>
        <Header />
        <main className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="location/:id" element={<Location />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  )
}

export default App
