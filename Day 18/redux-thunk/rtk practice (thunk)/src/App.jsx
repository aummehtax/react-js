/* 
-> createAsyncThunk :-

- A helper from Redux Toolkit to handle asynchronous tasks (like fetching data).
- It simplifies writing async action creators.
- Automatically manages request lifecycle: pending, fulfilled, rejected.
- Used because normal actions in Redux can only be synchronous, 
  but apps often need async operations (API calls, DB queries, etc).
*/


import { useDispatch , useSelector } from "react-redux"
import { apiFetch } from "./features/movie/MovieSlice"
import { useEffect, useState } from "react"

const App = () => {
  const [query , setQuery] = useState("")

   const dispatch = useDispatch()
   const state = useSelector((state) => state.movie)

   let handleApi = (e) => {
      const value = e.target.value
      setQuery(value)
      dispatch(apiFetch(value))
   }

    useEffect(() => {
        console.log(state);
    }, [state])

   return (
    <div>
      <input onChange={(e) => handleApi(e)} value={query}  type="text" placeholder="Search movie name" className="border m-5"/>
      <div className="flex flex-wrap gap-4">

        
      {state.loading && <div>Loading...</div>}
      {state.error && <div>Error fetching movies</div>}

       {state.data?.map((e,i) => (
        <div key={i}>
          <img className="w-[9vw] h-[200px] object-cover" src={e.Poster} alt="" />
          <h1>{e.Title}</h1>
        </div>
       ))  }
      </div>  
    </div>
  )
}

export default App
