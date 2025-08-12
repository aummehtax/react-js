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

        <div className="section-2 w-[100%] h-auto py-35 px-[2%] lg:px-[6%] xl:px-[10%] flex flex-wrap justify-center items-center gap-15 gap-y-26 bg-[#eee9db]">

            <div className="photo-section w-[90%] xl:w-[48%] p-8 h-[auto] border flex justify-center items-center relative bg-[#fcc40c]">
              <div className="sub-photo w-[100%] aspect-video border bg-[url(/src/assets/img1.webp)] bg-center bg-cover"></div>
               <div className="title-photo w-auto p-8 h-[68px] border absolute flex justify-center items-center top-[90%] left-[3%] bg-white text-black text-[3.2vw] sm:text-2xl">APEX LEGENDS SEASON 24</div>
            </div>

             <div className="photo-section w-[90%] xl:w-[48%] p-8 h-[auto] border flex justify-center items-center relative bg-[#1e4dd7]">
              <div className="sub-photo w-[100%] aspect-video border bg-[url(/src/assets/img3.webp)] bg-center bg-cover"></div>
               <div className="title-photo w-auto p-8 h-[68px] border absolute flex justify-center items-center top-[90%] left-[3%] bg-white text-black text-[3.2vw] sm:text-2xl">Civilization VII</div>
            </div>

             <div className="photo-section w-[90%] xl:w-[48%] p-8 h-[auto] border flex justify-center items-center relative bg-[#df3b24]">
              <div className="sub-photo w-[100%] aspect-video border bg-[url(/src/assets/img4.webp)] bg-center bg-cover"></div>
               <div className="title-photo w-auto p-8 h-[68px] border absolute flex justify-center items-center top-[90%] left-[3%] bg-white text-black text-[3.2vw] sm:text-2xl">Kingdom Come: Deliverance II</div>
            </div>

            <div className="photo-section w-[90%] xl:w-[48%] p-8 h-[auto] border flex justify-center items-center relative bg-[#ff72a2]">
              <div className="sub-photo w-[100%] aspect-video border bg-[url(/src/assets/img2.webp)] bg-center bg-cover"></div>
               <div className="title-photo w-auto p-8 h-[68px] border absolute flex justify-center items-center top-[90%] left-[3%] bg-white text-black text-[3.2vw] sm:text-2xl">Ubisoft UK on Social</div>
            </div>

        </div>

{/* section 3*/}

        <div class="w-full h-auto bg-[#df3b24] px-6 sm:px-12 lg:px-20 py-10 text-white grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 relative">

                      <div class="card-smile p-5 rounded-xl flex flex-col gap-4 items-start">
                        <img src="/src/assets/smiley.webp" alt="" class="w-12 h-auto -rotate-12 hover:rotate-12 duration-300 cursor-pointer"/>
                        <div class="text-2xl font-semibold">
                          <p>Campaign</p>
                          <p>of the Year</p>
                        </div>
                        <span class="text-sm opacity-80">MCV/DEVELOP AWARDS 2025</span>
                      </div>

                      <div class="card-smile p-5 rounded-xl flex flex-col gap-4 items-start">
                        <img src="/src/assets/smiley.webp" alt="" class="w-12 h-auto -rotate-12 hover:rotate-12 duration-300 cursor-pointer"/>
                        <div class="text-2xl font-semibold">
                          <p>Small Content</p>
                          <p>Agency of the Year</p>
                        </div>
                        <span class="text-sm opacity-80">UK CONTENT AWARDS 2024</span>
                      </div>

                      <div class="card-smile p-5 rounded-xl flex flex-col gap-4 items-start">
                        <img src="/src/assets/smiley.webp" alt="" class="w-12 h-auto -rotate-12 hover:rotate-12 duration-300 cursor-pointer"/>
                        <div class="text-2xl font-semibold">
                          <p>Best Use of</p>
                          <p>Interactive Content</p>
                        </div>
                        <span class="text-sm opacity-80">Content marketing awards 2023</span>
                      </div>

                      <div class="card-smile p-5 rounded-xl flex flex-col gap-4 items-start">
                        <img src="/src/assets/smiley.webp" alt="" class="w-12 h-auto -rotate-12 hover:rotate-12 duration-300 cursor-pointer"/>
                        <div class="text-2xl font-semibold">
                          <p>Independent Agency</p>
                          <p>of the Year</p>
                        </div>
                        <span class="text-sm opacity-80">UK Agency AWARDS 2023</span>
                      </div>

                      <div class="card-smile p-5 rounded-xl flex flex-col gap-4 items-start">
                        <img src="/src/assets/smiley.webp" alt="" class="w-12 h-auto -rotate-12 hover:rotate-12 duration-300 cursor-pointer"/>
                        <div class="text-2xl font-semibold">
                          <p>Best Integrated</p>
                          <p>Campaign</p>
                        </div>
                        <span class="text-sm opacity-80">UK SOCIAL MEDIA AWARDS 2022</span>
                      </div>

                      <div class="card-smile p-5 rounded-xl flex flex-col gap-4 items-start">
                        <img src="/src/assets/smiley.webp" alt="" class="w-12 h-auto -rotate-12 hover:rotate-12 duration-300 cursor-pointer"/>
                        <div class="text-2xl font-semibold">
                          <p>Innovative Agency</p>
                          <p>of the Year</p>
                        </div>
                        <span class="text-sm opacity-80">UK AGENCY AWARDS 2022</span>
                      </div>

                      <div class="card-smile p-5 rounded-xl flex flex-col gap-4 items-start">
                        <img src="/src/assets/smiley.webp" alt="" class="w-12 h-auto -rotate-12 hover:rotate-12 duration-300 cursor-pointer"/>
                        <div class="text-2xl font-semibold">
                          <p>Best Use of</p>
                          <p>New Social Platforms</p>
                        </div>
                        <span class="text-sm opacity-80">THE DRUM CONTENT AWARDS 2020</span>
                      </div>

                      <div class="card-smile p-5 rounded-xl flex flex-col gap-4 items-start">
                        <img src="/src/assets/smiley.webp" alt="" class="w-12 h-auto -rotate-12 hover:rotate-12 duration-300 cursor-pointer"/>
                        <div class="text-2xl font-semibold">
                          <p>Best Small</p>
                          <p>Agency</p>
                        </div>
                        <span class="text-sm opacity-80">UK SOCIAL MEDIA AWARDS 2020</span>
                      </div>

                      <div class="card-smile p-5 rounded-xl flex flex-col gap-4 items-start">
                        <img src="/src/assets/smiley.webp" alt="" class="w-12 h-auto -rotate-12 hover:rotate-12 duration-300 cursor-pointer"/>
                        <div class="text-2xl font-semibold">
                          <p>Chair</p>
                          <p>Award</p>
                        </div>
                        <span class="text-sm opacity-80">THE DRUM AGENCY AWARDS 2019</span>
                      </div>



                      <div class="shoes w-[40%] sm:w-[30%] md:w-[20%] lg:w-[22%] xl:w-[14%] h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px] absolute -bottom-20 sm:-bottom-28 md:-bottom-36 lg:-bottom-50 right-4 sm:right-10 md:right-16 lg:right-20">
                          <img src="/src/assets/shoes.webp" alt="" class="w-full h-full bg-center object-cover"/>
                      </div>
 
        </div>

{/* section 4*/}

<div class="bg-gray-100 py-50 w-[100%]">
  {/* <h2 class="text-center text-3xl font-bold mb-10">It’s as easy as it sounds.</h2> */}

  <ul class="space-y-[auto] relative flex flex-col gap-30 mt-8" >
    
    <li class="sticky top-[calc(40vh-215px)]">
      <div class="w-[80%]  h-[700px] mx-auto rounded-xl shadow-xl bg-[#1e4dd7] flex items-center justify-center text-white text-[3vw] md:text-[2vw] lg:text-2xl flex-col font-light gap-20 p-5 md:p-20 lg:p-30 xl:p-40">
         <div>
              <div>YRS TRULY came highly</div>
              <div>recommended by industry</div>
              <div>peers, and they more than</div>
              <div>lived up to the praise.</div>
         </div>

         <div>
          Their organisation, communication, attention to detail, and seamless collaboration made the entire process smooth and effective. We were so impressed that we’re already working with them again!
         </div>

         <div>
          Asim Tanvir
          Lead Marketing & Partnerships Manager
          Kinetic Games
         </div>
      </div>
    </li>

    <li class="sticky top-[calc(40vh-215px)]">
      <div class="w-[80%]  h-[700px] mx-auto rounded-xl shadow-xl bg-[#df3b24] flex items-center justify-center text-white text-[3vw] md:text-[2vw] lg:text-2xl flex-col font-light gap-20 p-5 md:p-20 lg:p-30 xl:p-40">
      <div>
                    <div>Their eye for spotting social</div>
                    <div>trends and ability to</div>
                    <div>capitalise upon them is</div>
                    <div>second to none.</div>
              </div>

              <div>
                The Ubisoft UK team’s close collaboration with YRS TRULY has successfully balanced an engaging local social presence with hundreds of thousands of impressions every month.


              </div>

              <div>
                Chris Place
                Head of Social Engagement, Northern Europe & Canada
                Ubisoft
              </div>
      </div>
    </li>

    <li class="sticky top-[calc(40vh-215px)]">
      <div class="w-[80%]  h-[700px] mx-auto rounded-xl shadow-xl bg-[#eee9db] flex items-center justify-center text-black text-[3vw] md:text-[2vw] lg:text-2xl flex-col font-light gap-20 p-5 md:p-20 lg:p-30 xl:p-40">
        <div>
            <div>“YRS TRULY did an</div>
                    <div>incredible job; not only did</div>
                    <div>they understand a direct</div>
                    <div>and somewhat tricky brief,</div>
                    <div>they (as always) exceeded</div>
                    <div>our expectations."</div>
              </div>

              <div>
                They supplied us with a diverse list of influencers, finding us new talent outside of those we already work with organically and regularly, helping us to expand our reach and voice.
              </div>

              <div>
                Hollie Bennett
                Head of Influencers and Engagement
                Frontier Developments
              </div>
              </div>
    </li>

    <li class="sticky top-[calc(40vh-215px)]">
      <div class="w-[80%]  h-[700px] mx-auto rounded-xl shadow-xl flex bg-[#fcc40c] items-center justify-center text-black text-[3vw] md:text-[2vw] lg:text-2xl flex-col font-light gap-20 p-5 md:p-20 lg:p-30 xl:p-40">
        <div>
              <div>YRS TRULY have been our</div>
              <div>go to agency for creative</div>
              <div>influencer campaigns.</div>
              </div>

              <div>
             YRS TRULY are fantastic at sourcing authentic advocates, delivering creative concepts and giving sound advice on how best to promote our IP across the influencer landscape.
              </div>

              <div>
              Amy Ellison
              Head of UK Communications
              PLAION
              </div>
        </div>

    </li>


  </ul>
</div>

    </div>
    
  )
}

export default Home