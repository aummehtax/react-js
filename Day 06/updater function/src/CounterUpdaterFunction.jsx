import { useState } from "react"

function Counter() {

    const [value , setValue] = useState(0)

    let increase = () => {
        //latest state value every time
        setValue(v => v + 1)
        setValue(v => v + 1)
        setValue(v => v + 1)
    }
    let decrease = () => {
        setValue(v => v - 1)
        setValue(v => v - 1)
        setValue(v => v - 1)
    }
    let reset = () => {
        setValue(0)
    }

    return(
        <div className="main">

         <div className="box">
            <h1>Counter app</h1>
            <h2>{value}</h2>
            <div className="btnDiv">
                <button className="inc" onClick={increase}>Increment</button>
                <button className="res" onClick={reset}>Reset</button>
                <button className="dec" onClick={decrease}>Decrement</button>
            </div>
         </div>
     
        </div>
    )
}

export default Counter