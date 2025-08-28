
function News() {
  return (
    <>
          <div className="w-full bg-[#F5F2E9] py-50 px-4">

            <h2 className="text-center text-5xl sm:text-4xl md:text-7xl font-sans font-semibold text-[#343030] pb-20 ">
              News
            </h2>

            <div className="flex flex-col lg:flex-row gap-10 lg:gap-8 items-center justify-center">

                  
                    <div className="max-w-[500px] w-full flex flex-col group cursor-pointer">
                      <div className="overflow-hidden">
                        <img src="/assets/n2.webp" alt="" className="w-full h-auto border object-cover grayscale group-hover:grayscale-0 transition-all duration-300"/>
                      </div>
                      <h3 className="mt-4 text-xl sm:text-2xl font-medium text-center lg:text-xl">
                        Looking for a Campaign Executive!
                      </h3>
                    </div>


                    <div className="max-w-[500px] w-full flex flex-col group cursor-pointer">
                      <div className="overflow-hidden">
                        <img src="/assets/n2.webp" alt="" className="w-full h-auto border object-cover grayscale group-hover:grayscale-0 transition-all duration-300"/>
                      </div>
                      <h3 className="mt-4 text-xl sm:text-2xl font-medium text-center lg:text-xl">
                        Five years with Wizards of the Coast
                      </h3>
                    </div>


                    <div className="max-w-[500px] w-full flex flex-col group cursor-pointer">
                      <div className="overflow-hidden">
                        <img src="/assets/n3.webp" alt="" className="w-full h-auto border object-cover grayscale group-hover:grayscale-0 transition-all duration-300"/>
                      </div>
                      <h3 className="mt-4 text-xl sm:text-2xl font-medium text-center lg:text-xl">
                        We're now B Corp certified!
                      </h3>
                    </div>

            </div>
            
          </div>

    </>
  )
}

export default News
