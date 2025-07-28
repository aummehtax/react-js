import { useState , createContext } from "react"
import CompB from "./CompB.jsx"

export const userContext = createContext()

function CompA() {
  
  let [user , setUser] = useState("world")

  return (
    <div className="box">
      <h1>Comp A</h1>
      <span>hello {user}</span>

      <userContext.Provider value={user}>
        <CompB></CompB>
      </userContext.Provider>
    </div>
  )
}

export default CompA
