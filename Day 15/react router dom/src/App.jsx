import { Routes , Route } from "react-router-dom";

import Home from "./components/pages/Home.jsx";
import About from "./components/pages/About.jsx";
import Product from "./components/pages/Product.jsx";
import Contact from "./components/pages/Contact.jsx";

import Header from "./components/common/Header.jsx";

function App() {
  return (
    <div className="bg-black">
    <Header></Header>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/product" element={<Product/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
    </div>
  )
}

export default App
