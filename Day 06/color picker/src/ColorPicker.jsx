import { useState } from "react";

function ColorPicker() {

   let [color , setColor] = useState() 

   let handleEvent = (e) => {
    setColor(e.target.value)
   }


    return(
        <div className="box">
            <div className="main">
                <h1>Color Picker</h1>
                <div className="display" style={{backgroundColor : color}}>
                    <button onClick={() => {navigator.clipboard.writeText(color); alert(`Color copy successfully ${color}`)} } style={{backgroundColor : color}}>Copy to Clipboard</button>
                </div>

                <input type="color" value={color} onChange={handleEvent}/>
                <h3>Pick Color</h3>
            </div>
        </div>
    )
}

export default ColorPicker