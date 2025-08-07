import { Routes, Route } from "react-router-dom";

import Header from "./components/Header.jsx"
import About from "./components/pages/About.jsx";
import CaseStudies from "./components/pages/CaseStudies.jsx";
import Home from "./components/pages/Home.jsx"
import News from "./components/pages/News.jsx";
import Contact from "./components/pages/Contact.jsx";


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/casestudies" element={<CaseStudies/>} />
        <Route path="/news" element={<News/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      
    </div>
  )
}

export default App
