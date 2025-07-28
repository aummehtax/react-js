import { useState , useEffect } from "react"

function Components() {

let [width , setWidth] = useState(window.innerWidth)  
let [height , setHeight] = useState(window.innerHeight)  

let handleResize = () => {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
}

useEffect(() => {
    window.addEventListener("resize" , handleResize)

    return () => {
        window.removeEventListener("resize" , handleResize) //removing when Components unmount
    }
}, [])

useEffect(() => {
    document.title = `${width} x ${height}`
}, [width ,height])

return (
    <div>
        <h2>Window Width : {width}</h2>
        <h2>Window Height : {height}</h2>
    </div>
)
}

export default Components
