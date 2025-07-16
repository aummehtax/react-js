import { useState } from "react"

function Mydemo (){

    const [name , setName] = useState("guest") //initial value
    const [age , setAge] = useState(0)
    const [isBo , setBool] = useState(false)

    let handleClick = () => {
        setName("aum")
    }

    let ageClick = () => {
        setAge(age + 1)
    }

    let isBool = () => {
        setBool(!isBo)
    }

    return(
        <>
         <div>Name : {name}</div>
         <br />
         <button onClick={handleClick}>Click here</button>
         <br />
         <br />

         <div>age : {age}</div>
         <br />
         <button onClick={ageClick}>Increment</button>
         <br />
         <br />

         <div>isEmployee ? : {isBo ? "yes" : "no"}</div>
         <br />
         <button onClick={isBool}>Toggle</button>
        </>

        
    )
}

export default Mydemo