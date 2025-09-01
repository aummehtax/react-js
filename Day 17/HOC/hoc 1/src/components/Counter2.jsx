import { hoc } from "./HOC/hoc"

const Counter2 = ({count, handleClickInc, handleClickDec}) => {

    return (
      <div>
        <h4 className="mt-6">Counter 2</h4>
        <span>Count = {count}</span>
        <button onClick={handleClickInc} className="cursor-pointer px-2 bg-gray-300 ms-5 mt-5">+</button>
        <button onClick={handleClickDec} className="cursor-pointer px-2 bg-gray-300 ms-5 mt-5">-</button>
      </div>
    )
}

export default hoc(Counter2)
