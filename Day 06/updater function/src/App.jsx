//updater function = a function passed as an argument to setState() usually example : setYear(y => y + 1) //arrow function
//                   allow for safe updates and asynchronous functions good practice to use updater function.

// example in Counter.jsx file

import Counter from "./CounterUpdaterFunction.jsx"

function App() {


  return (
    <>
      <Counter></Counter>
    </>
  )
}

export default App
