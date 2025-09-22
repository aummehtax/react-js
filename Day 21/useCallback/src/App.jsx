//notes in notes.txt file

import { useCallback, useState } from "react"
import Child from "./Child";

const App = () => {

  const [count, setCount] = useState(0);

  const sayHi = useCallback(() => {
    console.log("Hi");
  },[])

  return (
    <>
      <Child sayHi={sayHi} />
      <button onClick={() => setCount(count + 1)}>Increment {count}</button>
    </>
  )
}

export default App
