import { useContext } from "react"
import { userContext } from "./CompA.jsx"

function CompD() {

  const user = useContext(userContext)

  return (
   <div className="box">
      <h1>Comp D</h1>
      <span>bye {user}</span>
    </div>
  )
}

export default CompD
 