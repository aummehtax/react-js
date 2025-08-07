import { Link } from "react-router-dom"

function Header() {
  return (
    <div className="w-[100%] h-[60px] bg-[#02b602] z-30 flex justify-between items-center px-30 text-2xl">

        <Link to="/">Hello World</Link>
        
      <div className="flex gap-20">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/product">Product</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  )
}

export default Header
