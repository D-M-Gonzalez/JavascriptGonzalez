import { movieStore } from "../controller/movieStorage.js";
import { movieList } from "../data/MovieList.js";
import Movie from "../data/Movie.js";

export function setInitialMovies(){
    movieStore.forEach((movie)=>{
        const newMovie = new Movie(movie.name,movie.price,movie.duration)
        movieList.movies.push(newMovie)
    })
}