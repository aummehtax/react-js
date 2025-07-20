import { useState } from "react"

function Component (){

    let [cars , setCars] = useState([])
    let [year , setYear] = useState("")
    let [make , setMake] = useState("")
    let [model , setModel] = useState("")

    let addCars = (event) => {
     let newCar = {"year": year.trim() , "make" : make.trim().toLowerCase() , "model" : model.trim().toLowerCase()}
     setCars(car => [...car , newCar]) 
     
    setYear("")
    setMake("") 
    setModel("")

    }

    let removeCars = () => {
        let deleteCar = {"year": year , "make" : make , "model" : model}     

        setCars(car => cars.filter(
            car => !(car.year == deleteCar.year && car.make == deleteCar.make && car.model == deleteCar.model) 
        ))

        setYear("")
        setMake("") 
        setModel("")
    }

    let handleYear = (event) => {
      setYear(event.target.value)
    }

    let handleMake = (event) => {
      setMake(event.target.value)           
    }

    let handleModel = (event) => {
      setModel(event.target.value)
    }

    return(
        <>
            <h1>Cars</h1>
            <ul>
                {
                    cars.map((c , index) => {
                        return <li key={index}>{c.year} {c.make} {c.model}</li>
                    })
                }
            </ul>
            <input type="number" placeholder="year" onChange={handleYear} value={year}/> <br />
            <input type="text" placeholder="make" onChange={handleMake} value={make}/> <br />
            <input type="text" placeholder="model" onChange={handleModel} value={model}/> <br />
            <button onClick={addCars}>Add cars</button>
            <button onClick={removeCars}>Remove cars</button>
        </>
    )
}

export default Component