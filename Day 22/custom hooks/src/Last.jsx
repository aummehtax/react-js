import { useAllContext } from "./App"


const Last = () => {
    const user = useAllContext()
  return (
    <div>
       <h1>hello {user}</h1>
    </div>
  )
}

export default Last
