import { useState } from "react"

function Components (){

    let [car , setCar] = useState({year:2012 , make:"ford" , model:"mustang"})

    let handleYear = (event) => {
        setCar(c => ({...c , year:event.target.value}))
    }
    
    let handleMake = (event) => {
        setCar(c => ({...c , make:event.target.value}))
    }

    let handleModel = (event) => {
        setCar(c => ({...c , model:event.target.value}))
    }
    return(
        <>
         <h3>My favorite car is : {car.year} {car.make} {car.model}</h3>

         <input type="text" value={car.year} onChange={handleYear}/>
         <input type="text" value={car.make} onChange={handleMake}/>
         <input type="text" value={car.model} onChange={handleModel}/>
        </>
    )
}

export default Components