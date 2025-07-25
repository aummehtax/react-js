import DataShow from "./Components/DataShow.jsx"
import Product from "./Components/Product.jsx"
import { useState } from "react"

function App() {
  
  let [productData , setProductData] = useState(() => {
    let stored = JSON.parse(localStorage.getItem("Data"))
    if(stored){
      return stored
    }
    else{
      return []
    }
  }) 

  return (
    <>
    <DataShow setProductData={setProductData}></DataShow>
    <Product productData={productData}></Product>
    </>
  )
}

export default App
