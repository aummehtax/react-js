import { useState } from "react";
import {validEmail , validPassword} from "./Regex.jsx";

function App() {

  let [email , setEmail] = useState("")
  let [pass , setPass] = useState("")
  let [emailErr , setEmailErr] = useState(false)
  let [passErr , setPassErr] = useState(false)
   
  let handleValidation = (e) => {

    if(!validEmail.test(email)){
          e.preventDefault()
          setEmailErr(true)
    }
    if(!validPassword.test(pass)){
          e.preventDefault()
          setPassErr(true)
    }
  }

  return (
    <form className="flex flex-col w-[260px] gap-4 p-3">
       <input className="border" type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
              {emailErr ? <div className="text-red-600">Email error!</div> : null}
       <input className="border" type="text" placeholder="pass" value={pass} onChange={(e) => setPass(e.target.value)}/>
              {passErr ? <div className="text-red-600">Password error!</div> : null}
       <button className="border w-[30% ]" type="submit" onClick={handleValidation}>Click</button>


    </form>
  )
}

export default App

