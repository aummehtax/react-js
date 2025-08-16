import { useState } from "react"
import { Link } from "react-router-dom"


function Header() {

 const [isOpen , setOpen] = useState(false)  

  return (
    <div>
      <div className="w-[100%] h-[82px] border flex items-start justify-between ps-[2%] pe-[2%] sm:pe-[0%] bg-[#f6f3eb] fixed z-50 " >

         <Link to="/"><img src="/src/assets/logo.webp" alt="" className="w-[60px] lg:w-[68px] h-[50px] lg:h-[58px] cursor-pointer mt-[15px] lg:mt-[10px]"/></Link>

         <div className="w-[86%] lg:w-[70%] h-[100%]  left-header hidden sm:flex items-center justify-end">

            <Link className="w-[35%] flex items-center justify-center cursor-pointer hover:scale-[1.08] duration-[0.2s]" to="/">
                <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 24 24 ">
                <path fill="#000" d="M4 21V9l8-6l8 6v12h-6v-7h-4v7z" />
                </svg>
            </Link>


            <Link className="w-[80%] hover:bg-[#fcc40c] duration-[0.2s] cursor-pointer border-l h-[100%] flex items-center justify-center text-[#343060] text-[15px] md:text-[18px] font-medium tracking-wide" to="/about">ABOUT</Link>
            <Link className="w-[80%] hover:bg-[#fcc40c] duration-[0.2s] cursor-pointer border-l h-[100%] flex items-center justify-center text-[#343060] text-[15px] md:text-[18px] font-medium tracking-wide" to="/casestudies">CASE STUDIES</Link>
            <Link className="w-[80%] hover:bg-[#fcc40c] duration-[0.2s] cursor-pointer border-l h-[100%] flex items-center justify-center text-[#343060] text-[15px] md:text-[18px] font-medium tracking-wide" to="/news">NEWS</Link>
            <Link className="w-[80%] hover:bg-[#fcc40c] duration-[0.2s] cursor-pointer border-l h-[100%] flex items-center justify-center text-[#343060] text-[15px] md:text-[18px] font-medium tracking-wide" to="/contact">CONTACT US</Link>
         </div>


       <div className={`cross  mt-[20px] flex sm:hidden ${ isOpen ? "rotate-45" : "rotate-0" } duration-[0.3s]`} onClick={() => setOpen(!isOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
                <path fill="none" stroke="#362f2f" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v14m-7-7h14" />
            </svg>
       </div>

      </div>

         {/* empty div */}
            <div className="empty-div w[100%] h-[82px]"></div>
         {/* empty div */}


         {isOpen && (
                <div className="flex flex-col sm:hidden bg-[#f6f3eb] fixed top-[82px] left-0 w-full z-40 h-[100vh] ">
                  <Link to="/" className="py-4 hover:bg-[#fcc40c] duration-[0.2s] border-b text-center text-[#343060] text-[16px] font-medium tracking-wide" onClick={() => setOpen(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" className="mx-auto mb-1">
                      <path fill="#000" d="M4 21V9l8-6l8 6v12h-6v-7h-4v7z" />
                    </svg>
                    Home
                  </Link>
                  <Link to="/about" className="py-4 hover:bg-[#fcc40c] duration-[0.2s] border-b text-center text-[#343060] text-[16px] font-medium tracking-wide" onClick={() => setOpen(false)}>
                    ABOUT
                  </Link>
                  <Link to="/casestudies" className="py-4 hover:bg-[#fcc40c] duration-[0.2s] border-b text-center text-[#343060] text-[16px] font-medium tracking-wide" onClick={() => setOpen(false)}>
                    CASE STUDIES
                  </Link>
                  <Link to="/news" className="py-4 hover:bg-[#fcc40c] duration-[0.2s] border-b text-center text-[#343060] text-[16px] font-medium tracking-wide" onClick={() => setOpen(false)}>
                    NEWS
                  </Link>
                  <Link to="/contact" className="py-4 hover:bg-[#fcc40c] duration-[0.2s] border-b text-center text-[#343060] text-[16px] font-medium tracking-wide" onClick={() => setOpen(false)}>
                    CONTACT US
                  </Link>
                </div>
      )}

    </div>
  )
}

export default Header
