// useNavigate = hook to move between pages in React Router instead of link
// navigate("/about") → go to that route
// navigate(-1) → go back (like browser back button)
// navigate(1) → go forward (like browser forward button)

import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Home = () => {

    let [userName , setUserName] = useState("")
    let [userPass , setPass] = useState("")
    let page = useNavigate()

    const user = "aum"
    const pass = "aum12"
    let handleClick = () => {
        if(userName === user && userPass === pass){
            page("/page1")
            // page(1) you can write like these also 
        }
    }

  return (
    <div>
      <input type="text" onChange={(e) => setUserName(e.target.value)} value={userName} placeholder="userName"/>
      <input type="text" onChange={(e) => setPass(e.target.value)} value={userPass} placeholder="password"/>
      <button onClick={handleClick}>login</button>
    </div>
  )
}

export default Home
