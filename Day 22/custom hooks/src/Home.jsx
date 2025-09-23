import { useAllContext } from "./App"


const Home = () => {
 
    const user = useAllContext()
    

  return (
    <div>
      <h1>hello {user} </h1>
    </div>
  )
}

export default Home
