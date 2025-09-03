// useMemo = caches and returns a memoized value from a function 
// so React doesn’t recalculate it on every render, only when dependencies change
// (mostly use for calculation part)

import { useMemo } from "react"
import { useState } from "react"

const App = () => {

  const [count , setCount] = useState(0)

  let handleClick = () => {
     setCount(count + 1)
  }

  let countMul = useMemo(() => {
          return count * 2
  }, [count])


  return (
    <div>
      <h1>counter = {count}</h1>
      <h1>Counter * 2 = {countMul}</h1>
      <button onClick={handleClick}>+</button>
    </div>
  )
}

export default App
