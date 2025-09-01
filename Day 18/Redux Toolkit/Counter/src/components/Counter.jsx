import { useDispatch, useSelector } from "react-redux"
import { decrement, increment , reset , incrementByAmount } from "../features/counterSlice"
import { useState } from "react"

const Counter = () => {

  let count = useSelector((state) => state.counter.value) 
  let dispatch = useDispatch()
  let [amount , setAmount] = useState()
  

  let handleIncrement = () => {
     dispatch(increment())
  }  

  let handleDecrement = () => {
     dispatch(decrement())
  }  

  let handleReset = () => {
     dispatch(reset())
  }  

  let handleIncrementByAmount = () => {
     dispatch(incrementByAmount(amount))
  }  

  return (
    <div className="w-full h-[100vh] flex flex-col gap-10 items-center justify-center">
        <button className="bg-black rounded-2xl px-5 py-3 cursor-pointer text-white text-4xl" onClick={handleIncrement}>+</button>
        <h1>Counter = {count}</h1>
        <button className="bg-black rounded-2xl px-6 py-3 cursor-pointer text-white text-4xl" onClick={handleDecrement}>-</button>
        <button className="bg-black rounded-2xl px-4 py-3 cursor-pointer text-white text-1xl" onClick={handleReset}>Reset</button>

        <div className="flex flex-col gap-3">
            <input type="number" className="border-2 rounded-2xl h-10 px-3" value={amount} onChange={(e) => setAmount(e.target.value)} />
            <button className="bg-black rounded-2xl px-4 py-3 cursor-pointer text-white text-1xl" onClick={handleIncrementByAmount}>incrementByAmount</button>
        </div>
    </div>
  )
}

export default Counter
