//conditional rendering = allows you to control what gets rendered in your app based on certain condition (show , hide , or change components)

import Comp from "./Comp"

function App() {
  return(
    <>
      <Comp isLogged={true} username="aumCode" ></Comp>
    </>
  )
}

export default App
