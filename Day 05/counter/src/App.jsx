//react hook = special function that allows functional components to use react features without writing class components (useState, useEffect, useContext, useReducer, useCallback, and more..)

//useState() = a react hook that allows the creation of a stateful variable and a setter function to update its value in the virtual DOM [name , setName] 

import Mydemo from "./Mydemo.jsx"
import Counter from "./Counter.jsx"

function App() {


  return (
    <>
      {/* <Mydemo></Mydemo> */}
      <Counter></Counter>
    </>
  )
}

export default App
