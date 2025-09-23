// 🔹 Custom Hook in React:
// A custom hook is a reusable function that starts with "use" 
// and allows you to share logic across components. 
// They can call other hooks inside (like useState, useEffect, useContext).

// 🔹 Rules of Custom Hooks:
// 1. Name must start with "use" (e.g., useUser, useTheme).
// 2. Can call other React hooks inside.
// 3. Must follow Rules of Hooks:
//    - Call hooks only at the top level (not inside loops/conditions).
//    - Call hooks only inside React components or other custom hooks.


import Home from "./Home"
import Last from "./Last"
import { createContext } from "react"
import { useContext } from "react"

const conText = createContext()
const user = "WORLD"

//custom hooks
  export const useAllContext = () => {
    const allUsers = useContext(conText)
    return allUsers;
  } 
//custom hooks

const App = () => {
  
  return (
    <conText.Provider value={user}>
       <Home></Home>
      <Last></Last>
    </conText.Provider>
  )
}

export default App
