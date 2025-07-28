import CompD from "./CompD.jsx"
import { useContext } from "react"
import { userContext } from "./CompA.jsx"

function CompC() {

  const user = useContext(userContext)

  return (
     <div className="box">
      <h1>Comp C</h1>
       <span>hello {user} again</span>
      <CompD ></CompD>
    </div>
  )
}

export default CompC
