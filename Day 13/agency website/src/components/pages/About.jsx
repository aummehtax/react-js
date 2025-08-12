
const About = () => {
  return (
<div>
{/* section 1 */}

      <div className="about w-full h-auto lg:h-[91.7vh] flex flex-col lg:flex-row lg:p-0">

              
              <div className="about-right order-1 lg:order-2 w-full lg:w-1/2 flex flex-col justify-center items-center bg-[#f6f3eb] gap-10 p-6 md:p-10 sm:p-10 overflow-y-scroll">
                
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl flex flex-col justify-center items-center text-center">
                  <p className="two-font">We're an award-winning</p>
                  <p className="two-font">team of games and</p>
                  <p className="two-font">entertainment</p>
                  <p className="two-font">technology specialists.</p>
                </div>

            
                <div className="flex flex-col gap-8 text-center text-sm sm:text-base md:text-lg max-w-[800px]">
                  <div>
                    <p>We work with publishers and developers to put together best-in-class campaigns for their best-in-class games. With our in-house creative and production teams, we can deliver big: from multi-beat launch campaigns to high-impact digital activations.</p>
                  </div>
                  <div>
                    <p>Between us all, we cover eleven languages, with detailed market understanding of the UK, Germany, France, Spain, Italy, Poland, Ireland and North America.</p>
                  </div>
                  <div>
                    <p>You can read our code of conduct <span className="text-[#1e4dd7] font-semibold cursor-pointer">here</span>, and check out our B Corp score <span className="text-[#1e4dd7] font-semibold cursor-pointer">here</span>. We’re members of the Association for UK Interactive Entertainment, Conscious Advertising Network and Clean Creatives.</p>
                  </div>
                </div>

              </div>

              <div className="about-left order-2 lg:order-1 w-full lg:w-1/2 p-6 md:p-10 lg:p-0 md:h-[60vh] lg:h-auto flex justify-center items-center bg-[#f6f3eb]">
                <img src="/src/assets/about1.webp" alt="About section" className="w-full h-full object-cover rounded-lg"/>
              </div>
              
      </div>

{/* section 2  */}

     <div className="w-full h-auto xl:h-[60vh] bg-[#fcc40c] flex flex-col justify-center items-center p-5 md:px-12 lg:px-24 xl:px-36 gap-30">


          <div className="text-[20px] md:text-2xl lg:text-4xl text-[#343030] text-center">
            WE'RE TRUSTED BY...
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 md:gap-y-12 lg:gap-y-15 w-full">
            <img src="/src/assets/logo1.webp" alt="logo" className="max-w-[120px] mx-auto" />
            <img src="/src/assets/logo2.webp" alt="logo" className="max-w-[120px] mx-auto" />
            <img src="/src/assets/logo3.webp" alt="logo" className="max-w-[120px] mx-auto" />
            <img src="/src/assets/logo4.webp" alt="logo" className="max-w-[120px] mx-auto" />
            <img src="/src/assets/logo5.webp" alt="logo" className="max-w-[80px] mx-auto" />
            <img src="/src/assets/logo6.webp" alt="logo" className="max-w-[120px] mx-auto" />
            <img src="/src/assets/logo7.webp" alt="logo" className="max-w-[120px] mx-auto" />
            <img src="/src/assets/logo8.webp" alt="logo" className="max-w-[120px] mx-auto" />
            <img src="/src/assets/logo9.webp" alt="logo" className="max-w-[120px] mx-auto" />
            <img src="/src/assets/logo10.webp" alt="logo" className="max-w-[120px] mx-auto" />
            <img src="/src/assets/logo11.webp" alt="logo" className="max-w-[120px] mx-auto" />
            <img src="/src/assets/logo12.webp" alt="logo" className="max-w-[120px] mx-auto" />
          </div>

    </div>

{/* section3 */}

      <div className="bg-[#eee9db] py-16 px-4 border">

        <h2 className="text-center text-xl md:text-2xl lg:text-3xl font-mono mb-14 tracking-wide">
          WHAT DO WE DO?
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 max-w-7xl mx-auto">
            
            <div className="bg-[#fcc40c] relative pt-12 pb-6 px-6 w-full md:w-1/3 flex flex-col items-center">
              <div className="absolute -top-6 bg-white px-5 py-1 border shadow-md">
                <span className="font-light tracking-wide">CREATIVE</span>
              </div>
              <div className="w-full aspect-square overflow-hidden">
                <img src="/src/assets/about2.webp" alt="Creative" className="w-full h-full object-cover" />
              </div>
              <p className="mt-6 text-center leading-relaxed text-sm md:text-base">
                Creative campaigns<br />
                Interactive activations<br />
                Events and experiences
              </p>
            </div>

            <div className="bg-[#ff72a2] relative pt-12 pb-6 px-6 w-full md:w-1/3 flex flex-col items-center">
              <div className="absolute -top-6 bg-white px-5 py-1 border shadow-md">
                <span className="font-light tracking-wide">CREATOR</span>
              </div>
              <div className="w-full aspect-square overflow-hidden">
                <img src="/src/assets/about3.webp" alt="Creator" className="w-full h-full object-cover" />
              </div>
              <p className="mt-6 text-center leading-relaxed text-sm md:text-base">
                Influencer partnerships<br />
                Launch campaigns<br />
                Earned and paid creator coverage
              </p>
            </div>

            <div className="bg-[#31a0c8] relative pt-12 pb-6 px-6 w-full md:w-1/3 flex flex-col items-center">
              <div className="absolute -top-6 bg-white px-5 py-1 border shadow-md">
                <span className="font-light tracking-wide">SOCIAL</span>
              </div>
              <div className="w-full aspect-square overflow-hidden">
                <img src="/src/assets/about4.webp" alt="Social" className="w-full h-full object-cover" />
              </div>
              <p className="mt-6 text-center leading-relaxed text-sm md:text-base">
                Content creation<br />
                Social strategy<br />
                Video production
              </p>
            </div>

        </div>
      </div>

{/* section 4*/}


<div class=" py-16 px-4"> 
  <h2 class="text-center text-xl md:text-2xl lg:text-3xl font-mono mb-14 tracking-wide">
    MEET THE TEAM!
  </h2>

  <div class="flex flex-wrap justify-center gap-x-12 gap-y-14 max-w-7xl mx-auto">

    <div class="flex flex-col items-center max-w-[220px]">
      <img src="/src/assets/i1.webp" alt="MJ Widomska" class="w-[220px] h-[260px] object-cover"/>
      <p class="mt-4 text-xs uppercase tracking-wider text-center">Founder and Managing Director</p>
      <h3 class="text-2xl font-serif text-center leading-snug">MJ Widomska</h3>
    </div>

    <div class="flex flex-col items-center max-w-[220px]">
      <img src="/src/assets/i2.webp" alt="Ella Hagi" class="w-[220px] h-[260px] object-cover"/>
      <p class="mt-4 text-xs uppercase tracking-wider text-center">Campaign Director</p>
      <h3 class="text-2xl font-serif text-center leading-snug">Ella Hagi</h3>
    </div>

    <div class="flex flex-col items-center max-w-[220px]">
      <img src="/src/assets/i3.webp" alt="Summer Tang" class="w-[220px] h-[260px] object-cover"/>
      <p class="mt-4 text-xs uppercase tracking-wider text-center">Head of Operations</p>
      <h3 class="text-2xl font-serif text-center leading-snug">Summer Tang</h3>
    </div>

    <div class="flex flex-col items-center max-w-[220px]">
      <img src="/src/assets/i4.webp" alt="Lou Jones" class="w-[220px] h-[260px] object-cover"/>
      <p class="mt-4 text-xs uppercase tracking-wider text-center">Head of Campaign Strategy</p>
      <h3 class="text-2xl font-serif text-center leading-snug">Lou Jones</h3>
    </div>

    <div class="flex flex-col items-center max-w-[220px]">
      <img src="/src/assets/i5.webp" alt="Siân Hutchinson" class="w-[220px] h-[260px] object-cover"/>
      <p class="mt-4 text-xs uppercase tracking-wider text-center">Lead Campaign Manager</p>
      <h3 class="text-2xl font-serif text-center leading-snug">Siân Hutchinson</h3>
    </div>

    <div class="flex flex-col items-center max-w-[220px]">
      <img src="/src/assets/i6.webp" alt="Imogen Mellor" class="w-[220px] h-[260px] object-cover"/>
      <p class="mt-4 text-xs uppercase tracking-wider text-center">Social Lead</p>
      <h3 class="text-2xl font-serif text-center leading-snug">Imogen Mellor</h3>
    </div>

    <div class="flex flex-col items-center max-w-[220px]">
      <img src="/src/assets/i7.webp" alt="Monika Baran" class="w-[220px] h-[260px] object-cover"/>
      <p class="mt-4 text-xs uppercase tracking-wider text-center">Senior Producer</p>
      <h3 class="text-2xl font-serif text-center leading-snug">Monika Baran</h3>
    </div>

    <div class="flex flex-col items-center max-w-[220px]">
      <img src="/src/assets/i8.webp" alt="Yuji Aoyama" class="w-[220px] h-[260px] object-cover"/>
      <p class="mt-4 text-xs uppercase tracking-wider text-center">Campaign Manager</p>
      <h3 class="text-2xl font-serif text-center leading-snug">Yuji Aoyama</h3>
    </div>

    <div class="flex flex-col items-center max-w-[220px]">
      <img src="/src/assets/i9.webp" alt="Gareth Roe" class="w-[220px] h-[260px] object-cover"/>
      <p class="mt-4 text-xs uppercase tracking-wider text-center">Sales Manager</p>
      <h3 class="text-2xl font-serif text-center leading-snug">Gareth Roe</h3>
    </div>

    <div class="flex flex-col items-center max-w-[220px]">
      <img src="/src/assets/i10.webp" alt="Gareth Roe" class="w-[220px] h-[260px] object-cover"/>
      <p class="mt-4 text-xs uppercase tracking-wider text-center">Sales Manager</p>
      <h3 class="text-2xl font-serif text-center leading-snug">Soma oia</h3>
    </div>

    <div class="flex flex-col items-center max-w-[220px]">
      <img src="/src/assets/i11.webp" alt="Gareth Roe" class="w-[220px] h-[260px] object-cover"/>
      <p class="mt-4 text-xs uppercase tracking-wider text-center">Campaign Manager</p>
      <h3 class="text-2xl font-serif text-center leading-snug">Jpick aror</h3>
    </div>

    <div class="flex flex-col items-center max-w-[220px]">
      <img src="/src/assets/i12.webp" alt="Gareth Roe" class="w-[220px] h-[260px] object-cover"/>
      <p class="mt-4 text-xs uppercase tracking-wider text-center">Campaign Manager</p>
      <h3 class="text-2xl font-serif text-center leading-snug">Sam aroy</h3>
    </div>

  </div>
</div>

{/* section 5*/}

<div class="relative">
  <h2 class="inline-block bg-[#f7f4ec] text-lg md:text-xl font-mono uppercase tracking-wider mb-8 px-2 absolute -top-7">
    Press Coverage
  </h2>

  <div class="bg-[#f7f4ec] py-12 px-4 mt-20">
    <div class="space-y-4 max-w-6xl mx-auto">
      
      <div class="group relative flex flex-col sm:flex-row justify-between border-b border-dotted border-black pb-3" >
        <span class="font-mono uppercase text-sm">MCV/DEVELOP</span>
        <span class="text-base font-sans">The Slayeux Tapestry, 2025</span>
        <img src="/src/assets/i1.webp" alt="Preview" class="hidden group-hover:block absolute right-0 top-full mt-2 w-35 h-auto shadow-lg border bg-white z-10"/>
      </div>

      
      <div class="group relative flex flex-col sm:flex-row justify-between border-b border-dotted border-black pb-3">
        <span class="font-mono uppercase text-sm">MCV/DEVELOP</span>
        <span class="text-base font-sans" >Keeping up with social media algorithms, 2025</span>
        <img src="/src/assets/i2.webp" alt="Preview" class="hidden group-hover:block absolute right-0 top-full mt-2 w-35 h-auto shadow-lg border bg-white z-10"/>
      </div>

      
      <div class="group relative flex flex-col sm:flex-row justify-between border-b border-dotted border-black pb-3">
        <span class="font-mono uppercase text-sm">CAMPAIGN</span>
        <span class="text-base font-sans" >Gaming advertisers share their New Year's resolutions, 2024</span>
        <img src="/src/assets/i3.webp" alt="Preview" class="hidden group-hover:block absolute right-0 top-full mt-2 w-35 h-auto shadow-lg border bg-white z-10"/>
      </div>

      
      <div class="group relative flex flex-col sm:flex-row justify-between border-b border-dotted border-black pb-3">
        <span class="font-mono uppercase text-sm">GAMES INDUSTRY</span>
        <span class="text-base font-sans" >How to make your company economically sustainable, 2023</span>
        <img src="/src/assets/i4.webp" alt="Preview" class="hidden group-hover:block absolute right-0 top-full mt-2 w-35 h-auto shadow-lg border bg-white z-10"/>
      </div>

      
      <div class="group relative flex flex-col sm:flex-row justify-between border-b border-dotted border-black pb-3">
        <span class="font-mono uppercase text-sm">MCV/DEVELOP</span>
        <span class="text-base font-sans" >Can your business be a force for good, 2023</span>
        <img src="/src/assets/i5.webp" alt="Preview" class="hidden group-hover:block absolute right-0 top-full mt-2 w-35 h-auto shadow-lg border bg-white z-10"/>
      </div>
    </div>
  </div>
</div>


</div>
  )
}

export default About
