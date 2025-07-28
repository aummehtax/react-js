// useEffect() = react hook tells react to do some code when (pick one):
//               this components re-renders
//               this components mount
//               the state of a value 

//useEffect(function , [dependencies])

// 1. useEffect(() => {})                        //runs after every re-render
// 2. useEffect(() => {} , [])                   //runs only on mount
// 3. useEffect(() => {} , [value])              //runs on mount + when value change

// uses
// 1. event listeners
// 2. DOM manipulation
// 3. subscription (real time update)
// 4. fetching data from an api
// 5. clean up when a components unmounts

//what is mount and unmount ?
//mount : mount is when components added to DOM
//unmount : unmount is when it’s removed—handled using useEffect with setup and cleanup functions

import { useState , useEffect } from "react"

function Components() {
  
    let [count , setCount] = useState(0)
    let [color , setColor] = useState("green")

    useEffect(() => {
      document.title = `count : ${count}`   
    }, [count])

    let handleAdd = () => {
        setCount(c => c + 1)
    }

    let handleSub = () => {
        setCount(c => c - 1)
    }
    
    let handleColor = () => {
        setColor(c =>  c === "green" ? "red" : "green")
    }
  
    return (
    <div>
        <p style={{color : color}}>count : {count}</p>
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleSub}>Subtract</button>
        <button onClick={handleColor}>Change Color</button>
    </div>
  )
}

export default Components
