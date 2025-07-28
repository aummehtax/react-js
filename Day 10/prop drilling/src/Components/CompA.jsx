import { useState } from "react"
import CompB from "./CompB"

//if i want to show user in Comp D then i do props Drilling

function CompA() {
  
  let [user , setUser] = useState("world")
    

  return (
    <div className="box">
      <h1>Comp A</h1>
      <span>hello {user}</span>
      <CompB user={user}></CompB>
    </div>
  )
}

export default CompA
