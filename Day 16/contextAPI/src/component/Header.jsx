import { useContext } from "react"
import { contextData } from "../context/contextData"


const Header = () => {
  const data = useContext(contextData)
  return (
    <div>
      <h1>header {data.age}</h1>
    </div>
  )
}

export default Header
