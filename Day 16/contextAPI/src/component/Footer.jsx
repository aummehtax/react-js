import { useContext } from "react"
import { contextData } from "../context/contextData"

const Footer = () => {
  const data = useContext(contextData)
  return (
    <div>
      <h1>footer {data.state}</h1>
    </div>
  )
}

export default Footer
