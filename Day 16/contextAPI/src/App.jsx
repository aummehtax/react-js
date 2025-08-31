//context API - layman term

// createContext
// Make a box to store data (like creating a container).

// Provider
// Put data into the box and share it with all child components.

// useContext
// Open the box and take out the data.

import Header from "./component/Header"
import HeroPage from "./component/HeroPage"
import Footer from "./component/Footer"
import { useContext } from "react"
import { contextData } from "./context/contextData"


const App = () => {

  const data = useContext(contextData)

  console.log(data);
  
  return (
    <div>
      <h1>app page {data.name}</h1>
      <Header></Header>
      <HeroPage></HeroPage>
      <Footer></Footer>
    </div>
  )
}

export default App
