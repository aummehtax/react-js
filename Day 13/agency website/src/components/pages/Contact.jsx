import regexData from "../../regex";
import { useState } from "react";

function Contact() {

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [msgError, setMsgError] = useState("");

  let handleName = (e) => {

    if (regexData[0].test(e.target.value)) {
      setNameError("")
    }
    else{
     setNameError("Please enter a valid name");
    }
  }

  let handleEmail = (e) => {

    if (regexData[1].test(e.target.value)) {
      setEmailError("")
    }
    else{
     setEmailError("Please enter a valid email");
    }
  }

  let handleMsg = (e) => {

    if (regexData[2].test(e.target.value)) {
      setMsgError("")
    }
    else{
     setMsgError("Please enter a valid message");
    }
  }

  return (

<div className="w-full bg-[#f6f3eb] py-12 px-4">

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 md:gap-16">

          <div className="flex-[0.9] flex flex-col items-center md:items-start relative">

            <div className="bg-[#eee9db] px-5 py-8 rotate-[-3deg] w-[90%] sm:w-[70%] md:w-[85%] flex flex-col mb-1">
              <span className="text-3xl sm:text-4xl font-semibold">Let’s Talk!</span>
              <span className="mt-1 text-xs sm:text-sm text-right">
                Drop us an email at <span className="underline">hello@yrstruly.uk</span>
              </span>
            </div>

            <div className="w-full aspect-[4/3] overflow-hidden border z-10">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d86341.1728857073!2d-120.4862710902605!3d47.44778825791524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549bcc43dd054f43%3A0x746e63024633d190!2sWenatchee%2C%20WA%2098801%2C%20USA!5e0!3m2!1sen!2sin!4v1755348168385!5m2!1sen!2sin" className="w-full h-full" loading="lazy" allowFullScreen/>
            </div>

            <p className="mt-4 flex items-center gap-2 text-sm sm:text-base">
              <span className="text-blue-500">📍</span>
              1 Westgate Street, E8 3RL London
            </p>

            <div className="mt-6 w-[78%] sm:w-[55%] rotate-2 bg-[#F4C32F] py-6 px-6">
              <h3 className="text-lg sm:text-xl font-semibold">Are you a Content Creator?</h3>
              <p className="mt-1 text-sm">
                SIGN UP TO OUR NEWSLETTER{' '}
                <span className="underline text-[#0778c4] cursor-pointer">HERE</span>
              </p>
            </div>
          </div>

          <div className="flex-1">
            <form className="flex flex-col gap-4 sm:gap-5">
              <div>
                <label className="block mb-1">Your Name</label>
                <input type="text" placeholder="Your Name" className="w-full border p-3 outline-none bg-white" onChange={handleName}/>
                {nameError && (
                  <span className="text-red-500 text-sm">{nameError}</span>
                )}
              </div>

              <div>
                <label className="block mb-1">Email Address</label>
                <input type="email" placeholder="your email@nice.com" className="w-full border p-3 outline-none bg-white" onChange={handleEmail}/>
                {emailError && (
                  <span className="text-red-500 text-sm">{emailError}</span>
                )}
              </div>

              <div>
                <label className="block mb-1">Your Message</label>
                <textarea placeholder="Your message..." className="w-full border p-3 h-[150px] resize-none outline-none bg-white" onChange={handleMsg} />
                {msgError && (
                  <span className="text-red-500 text-sm">{msgError}</span>
                )}
              </div>

              <button type="submit" className="btn-text bg-[#F4C32F] py-3 w-full text-center font-medium" >
                SUBMIT MESSAGE
              </button>
            </form>
          </div>
        </div>

</div>

  )
}

export default Contact
