import DataShow from "./Components/DataShow.jsx"
import Product from "./Components/Product.jsx"
import { useState } from "react"

function App() {
  
  let [productData , setProductData] = useState([])


  return (
    <>
    <DataShow setProductData={setProductData}></DataShow>
    <Product productData={productData}></Product>
    </>
  )
}

export default App
