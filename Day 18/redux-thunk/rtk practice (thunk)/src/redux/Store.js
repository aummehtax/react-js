import { configureStore } from "@reduxjs/toolkit"
import  MovieSliceReducer  from "../features/movie/MovieSlice"

export const store = configureStore({
    reducer: {
        movie: MovieSliceReducer,
    },
})