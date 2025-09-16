import { createContext, useState } from "react"
import { Routes, Route } from "react-router-dom"
import Login from "./Login.jsx"
import Signup from "./Signup.jsx"

export const contextData = createContext()

const App = () => {
  const [data, setData] = useState({
    email: "",
    pass: "",
  })

  return (
    <contextData.Provider value={{ data, setData }}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </contextData.Provider>
  )
}

export default App
