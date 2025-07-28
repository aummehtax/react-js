import { useState , useEffect } from "react"

function Movie() {

    let [movies , setMovie] = useState([])
    let [count , setCount] = useState(1)
  
   useEffect(() => {
    fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=a2d86755e5d6eac04182233d4c6dcb1e&page=${count}`)
    .then(request => request.json())
    .then(res => {
        setMovie(prev => [...prev , ...res.results])
    })
    .catch(error => {
        console.log("Fetching Error" , error);
        
    })
   },[count])
   
    let handleClick = () => {
        setCount(count => count + 1)
    }
      
  return (
    <div className="p-4 sm:p-6">

        <h1 className="text-2xl font-bold mb-6 text-center">Trending Movies</h1>
        <div className="flex flex-wrap justify-center gap-6">

        {movies.map(movie => (
            <div key={movie.id} className="w-40 sm:w-48 bg-white shadow-md rounded-lg overflow-hidden">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="w-full h-60 sm:h-72 object-cover"/>
            <div className="p-3">
                <h3 className="text-md font-semibold truncate">{movie.title}</h3>
                <p className="text-sm text-gray-500">{movie.release_date}</p>
            </div>
            </div>
        ))}

        </div>

        <div className="flex w-[100%] justify-center items-center my-3 mt-9">
        <button className="cursor-pointer" onClick={handleClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24">
            <path fill="#000" d="m12 15.4l-6-6L7.4 8l4.6 4.6L16.6 8L18 9.4z" />
            </svg>
        </button>
        </div>
    </div>
  )
}

export default Movie
