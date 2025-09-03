import {BrowserRouter , Routes , Route} from "react-router-dom"
import Home from "./Home"
import Page1 from "./Page1"

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/page1" element={<Page1></Page1>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
