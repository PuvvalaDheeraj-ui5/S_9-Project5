import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from "./components/About"
import Home from "./components/Home"
import Master from "./components/Master"
import Contact from "./components/Contact"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Master />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App