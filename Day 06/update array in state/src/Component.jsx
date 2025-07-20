import { useState } from "react"

function Component (){

    let [fruits , setFruits] = useState(["mango", "apple"])
    let [inputValue , setInputValue] = useState("")

    let addFruits = () => {
        let newFruits = inputValue.trim().toLowerCase();
        setFruits(fruits => [...fruits , newFruits])

        setInputValue("")
        
    }

    let removeFruits = () => {
        
        let deleteFruits = inputValue.trim().toLowerCase();
        setFruits(fruits => fruits.filter( (ele) => ele !== deleteFruits))

        setInputValue("")
        
    }

    return(
        <>
        <h1>Fruits</h1>
        <ul>
            {
                fruits.map((fru , index) => {
                    return <li key={index}>{fru}</li>
                })
            }
        </ul>
        <input type="text" value={inputValue} placeholder="Enter fruits" id="inputFruits" onChange={(e) => setInputValue(e.target.value)}/>
        <button onClick={addFruits}>Add fruits</button>
        <button onClick={removeFruits}>Remove fruits</button>

        </>
    )

}

export default Component