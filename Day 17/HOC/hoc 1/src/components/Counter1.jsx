import { hoc } from "./HOC/hoc"

const Counter1 = ({count, handleClickInc, handleClickDec}) => {

  return (
    <div>
      <h4>Counter 1</h4>
      <span>Count = {count}</span>
      <button onClick={handleClickInc} className="cursor-pointer px-2 bg-gray-300 ms-5 mt-5">+</button>
      <button onClick={handleClickDec} className="cursor-pointer px-2 bg-gray-300 ms-5 mt-5">-</button>
    </div>
  )
}

export default hoc(Counter1)
