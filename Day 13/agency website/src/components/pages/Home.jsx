function Home() {
  return (
    <div>
{/* section 1*/}

        <div className="hero-section w-[100%] h-[auto]  lg:h-[885px] flex-col lg:flex lg:flex-row justify-between ">

            {/* left */}
            <div className="hero-left w-[100%] h-[50%] md:h-screen lg:w-[50%] lg:h-[100%] border-r border-b bg-[#eee9db]">

                <div className="sub-hero-up bg-[#fcc40c] w-[100%] h-[80%] border-b flex justify-center items-center ps-8 pe-5 py-26 md:py-0">
                    <div>
                        <p className="one-font text-[60px] md:text-[65px]">We’re YRS TRULY,</p>
                        <p className="one-font text-[60px] md:text-[65px]">a very nice marketing</p>
                        <p className="one-font text-[60px] md:text-[65px]">agency for the games</p>
                        <p className="one-font text-[60px] md:text-[65px]">industry.</p>
                    </div>
                </div>
                <div className="sub-hero-down w-full h-[20%] border-b flex justify-center items-center">
                  <div className="w-full h-auto flex flex-wrap justify-center items-center gap-4 py-10 md:py-2">
                      <button className="btn-hero w-[45%] sm:w-[30%] h-[48px] border text-[4vw] sm:text-[2vw] lg:text-[1vw] tracking-wider bg-[#ff72a2]">SOCIAL </button>
                      <button className="btn-hero w-[45%] sm:w-[30%] h-[48px] border text-[4vw] sm:text-[2vw] lg:text-[1vw] tracking-wider bg-[#31a0c8]">CREATIVE</button>
                      <button className="btn-hero w-[45%] sm:w-[30%] h-[48px] border text-[4vw] sm:text-[2vw] lg:text-[1vw] tracking-wider bg-[#fcc40c]">CREATOR</button>
                  </div>
                </div>

            </div>
            {/* right */}
            <div className="hero-right w-[100%] h-[50%] md:h-screen lg:w-[50%] lg:h-[100%] border-b flex items-center justify-center bg-[#31a0c8] py-14 sm:py-17 md:py-0">
                
                <div className="red-border w-[85%] sm:w-[80%] md:w-[70%] aspect-square border flex items-center justify-center bg-[#df3b24] relative">
                        <img src="/src/assets/hero2.webp" alt="" className="absolute w-[25%] max-w-[170px] h-auto left-[-5%] bottom-[10%] -rotate-6 sm:w-[30%] sm:left-[-10%]"/>
                        <img src="/src/assets/smiley.webp" alt="" className="absolute w-[15%] max-w-[110px] h-auto top-[-5%] right-[5%] -rotate-12 hover:rotate-12 duration-200 cursor-pointer sm:w-[20%] sm:top-[-8%]"/>
                    <div className="sub-red-border w-[90%] h-[90%] border">
                        <img src="/src/assets/hero1.webp" alt="" className="w-full h-full object-cover object-center"/>
                    </div>
                </div>

            </div>

        </div>

{/* section 2*/}

        <div className="section-2 w-[100%] h-auto py-35 px-[10%] flex flex-wrap justify-center items-center gap-15 gap-y-26 bg-[#eee9db]">

            <div className="photo-section w-[48%] h-[445px] border flex justify-center items-center relative bg-[#fcc40c]">
              <div className="sub-photo w-[90%] aspect-video border bg-[url(/src/assets/img1.webp)] bg-center bg-cover"></div>
               <div className="title-photo w-[386px] h-[68px] border absolute flex justify-center items-center top-[90%] left-[3%] bg-white text-black text-2xl">APEX LEGENDS SEASON 24</div>
            </div>

            <div className="photo-section w-[48%] h-[445px] border flex justify-center items-center relative bg-[#1e4dd7]">
              <div className="sub-photo w-[90%] aspect-video border bg-[url(/src/assets/img3.webp)] bg-center bg-cover"></div>
               <div className="title-photo w-[386px] h-[68px] border absolute flex justify-center items-center top-[90%] left-[3%] bg-white text-black text-2xl">Civilization VII</div>
            </div>

            <div className="photo-section w-[48%] h-[445px] border flex justify-center items-center relative bg-[#df3b24]">
              <div className="sub-photo w-[90%] aspect-video border bg-[url(/src/assets/img4.webp)] bg-center bg-cover"></div>
               <div className="title-photo w-[460px] h-[68px] border absolute flex justify-center items-center top-[90%] left-[3%] bg-white text-black text-2xl">Kingdom Come: Deliverance II</div>
            </div>

            <div className="photo-section w-[48%] h-[445px] border flex justify-center items-center relative bg-[#ff72a2]">
              <div className="sub-photo w-[90%] aspect-video border bg-[url(/src/assets/img2.webp)] bg-center bg-cover"></div>
               <div className="title-photo w-[386px] h-[68px] border absolute flex justify-center items-center top-[90%] left-[3%] bg-white text-black text-2xl">Ubisoft UK on Social</div>
            </div>

        </div>
    </div>
    
  )
}

export default Home